import { methods } from '@/utils/constants';
import { MethodChannel } from '@easythings/easy-view/jsx-runtime';

const channel = new MethodChannel();
/**@type {Uint8ClampedArray} */
let image;
let imageU8;
let mouseX = 0;
let mouseY = 0;

channel.register(methods.sendCanvas, ([canvas]) => {
  mouseX = canvas.width / 2 + 200;
  mouseY = canvas.height / 2 + 100;
  new Drawer(canvas);
});
channel.register(methods.sendIcon, ([bitmap]) => {
  image = bitmap;
  const c = new OffscreenCanvas(image.width, image.height).getContext('2d');
  c.drawImage(image, 0, 0);
  imageU8 = c.getImageData(0, 0, image.width, image.height).data;
});
channel.register(methods.mouseMove, (pos) => {
  [mouseX, mouseY] = pos;
});
channel.connect(self);

// class FPS {
//   lastTime;
//   frame = 0;
//   value = 60;

//   [Symbol.toPrimitive]() {
//     return this.value;
//   }

//   update(time) {
//     if (!this.lastTime) return (this.lastTime = time);
//     this.frame++;
//     const offset = time - this.lastTime;
//     if (offset >= 1000) {
//       this.value = ~~((this.frame * 1000) / offset);
//       this.lastTime = time;
//       this.frame = 0;
//     }
//   }
// }

class Drawer {
  /**@type {HTMLCanvasElement} */
  canvas;
  /**@type {CanvasRenderingContext2D} */
  ctx;
  logicFrame = 0; // 逻辑帧
  // fps = new FPS();
  points = [];
  mask;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    requestAnimationFrame(this.update);
  }

  draw() {
    this.ctx.fillStyle = 'rgba(15,23,42,.3)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.points.forEach((point) => point?.draw(this.ctx));
    // this.ctx.font = '16px Arial';
    // this.ctx.fillStyle = '#ffffff';
    // this.ctx.fillText(`fps: ${this.fps}`, 24, this.canvas.height - 24);
  }

  update = (time) => {
    if (!this.canvas || !this.ctx) return;
    this.logicFrame = (this.logicFrame & 1023) + 1;
    // this.fps.update(time);
    this.createPoint(this.logicFrame);
    this.points.forEach((point) => point?.update(time));
    this.draw();
    requestAnimationFrame(this.update);
  };

  createPoint(i) {
    if (image && imageU8) {
      const x = ~~(Math.random() * image.width);
      const y = ~~(Math.random() * image.height);
      const index = (y * image.width + x) * 4;
      const r = imageU8[index];
      const g = imageU8[index + 1];
      const b = imageU8[index + 2];
      const a = imageU8[index + 3];
      this.points[(i - 1) & 1023] = new Point(
        x - image.width / 2,
        y - image.height / 2,
        Math.random() * this.canvas.width,
        Math.random() * this.canvas.height,
        r,
        g,
        b,
        a,
      );
      if (this.points.length < 1000) {
        return this.createPoint(this.points.length + 1);
      }
    }
  }
}

class Point {
  x;
  y;
  r = 0;
  step;
  color;
  lastMX;
  lastMY;

  constructor(x, y, mx, my, r, g, b, a = 123) {
    this.x = x;
    this.y = y;
    this.lastMX = mx;
    this.lastMY = my;
    this.step = Math.random() * 0.16;
    this.color = `rgba(${r},${g},${b},${a / 255})`;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x + this.lastMX, this.y + this.lastMY, this.r, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.r += this.step;
    if (this.r > 4 || this.r < 0) {
      this.r = Math.abs(this.r);
      this.step = this.step * -1;
    }
    if (this.lastMX !== mouseX) {
      let speed = (mouseX - this.lastMX) / 30;
      if (speed > 0 && speed < 1) speed = 1;
      else if (speed > -1 && speed < 0) speed = -1;
      this.lastMX += speed;
    }
    if (this.lastMY !== mouseY) {
      let speed = (mouseY - this.lastMY) / 30;
      if (speed > 0 && speed < 1) speed = 1;
      else if (speed > -1 && speed < 0) speed = -1;
      this.lastMY += speed;
    }
  }
}
