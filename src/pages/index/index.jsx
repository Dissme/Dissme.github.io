import { mount } from '@easythings/easy-view';

function Main() {
  return (
    <div className="sm:pt-24 lg:pt-32 md:pl-24 max-w-3xl p-6 mx-auto">
      <h1 className="text-5xl font-bold">easy-view</h1>
      <p className="text-slate-400 text-justify leading-relaxed py-8">
        easy-view是一个很简单的MVP框架。它的jsx-runtime可以运行在worker、node、deno等js容器中，因此开发者可以很简单的实现远程推送组件、微前端、PWA等。它的渲染器和jsx-runtime通过类似rpc的通讯方式交互，虽然损耗了一些性能，但是后续有跨平台需求时只需要在宿主平台提供相同的通讯和渲染逻辑，而不需要重写业务代码。
        {/* 最重要的是它的作者是个无业游民，偶尔会通过写代码来打发时间，如果star和issue多他会很有动力写下去 */}
      </p>
      <div className="flex items-center space-x-4">
        <a
          className="font-semibold rounded py-2 px-4 bg-blue-500 shadow-lg shadow-blue-500/50 bg-opacity-70 hover:bg-opacity-100"
          href="/example.html"
        >
          开始
        </a>
        <a
          className="font-semibold rounded py-2 px-4 bg-slate-500 shadow-lg shadow-stone-500/50 bg-opacity-70 hover:bg-opacity-100"
          href="/docs.html"
        >
          文档
        </a>
        <a href="https://github.com/Dissme/easy-view" target="_blank" rel="noopener noreferrer">
          <img
            alt="GitHub Repo stars"
            src="https://img.shields.io/github/stars/Dissme/easy-view?style=social"
            crossOrigin="anonymous"
          />
        </a>
      </div>
    </div>
  );
}

mount(<Main />, document.querySelector('#app'));
