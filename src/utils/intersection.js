const observerMap = new WeakMap();
const dispatchMap = new WeakMap();

export default function intersection(target, dispatch) {
  dispatchMap.set(target, dispatch);
  if (!observerMap.has(this)) {
    observerMap.set(
      this,
      new IntersectionObserver(
        (entries) => {
          entries.forEach((item) => {
            dispatchMap.get(item.target)(item.intersectionRatio);
          });
        },
        {
          threshold: [0, 0.5, 1],
        },
      ),
    );
  }

  observerMap.get(this).observe(target);

  return () => {
    observerMap.get(this).unobserve(target);
    dispatchMap.delete(target);
  };
}
