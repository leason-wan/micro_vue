export function micro(Vue) {
  let instance = null;
  let render = null;

  function createApp(options) {
    render = (props = {}) => {
      const { container } = props;
      const { el, ...vm } = options;
      instance = new Vue(vm).$mount(container ? container.querySelector(el) : el);
    }
    Vue.mixin({
      beforeCreated() {
        if (this.$options.router) {
          this._routerRoot = this;
          // todo inject router
        } else {
          this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
        }
      },
    });
    if (!window.__POWERED_BY_QIANKUN__) {
      render();
    }
  }

  function createLifeCycle() {
    const bootstrap = async () => {
      console.log("[vue] vue app bootstraped");
    };
    const mount = async (props) => {
      console.log("[vue] props from main framework", props);
      render(props);
    };
    const unmount = async () => {
      instance.$destroy();
      instance.$el.innerHTML = "";
      instance = null;
    };
    return {
      bootstrap,
      mount,
      unmount,
    };
  }

  return {
    createApp,
    lifeCycle: createLifeCycle(),
  };
}
