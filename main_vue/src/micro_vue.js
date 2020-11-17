import { registerMicroApps, start } from 'qiankun';

const CONTAINER_DEFAULT = 'micro_vue_default';

function routes2microApps(routes, loader) {
  const microApps = [];
  routes.map((route, index) => {
    const { app, path } = route;
    const url = app;
    microApps.push({
      name: path + url + index,
      entry: url,
      container: `#${CONTAINER_DEFAULT}`,
      loader,
      activeRule: path
    });
  });
  return microApps;
}

function register(routes, loader) {
  let microApps = routes2microApps(routes, loader);
  registerMicroApps(microApps);
}

function install(Vue) {
  Vue.component('micro-view', {
    render(h) {
      return h('div', {
        attrs: {
          id: CONTAINER_DEFAULT
        }
      })
    }
  });
  Vue.mixin({
    beforeCreated() {
      if(this.$options.router) {
        this._routerRoot = this;
        // todo inject router
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
    },
    mounted() {
      const { router } = this.$options;
      if(router) {
        const loader = loading => this.$children[0].loading = loading;
        loader(true);
        register(router.routes, loader);
        router.start();
      }
    },
  })
}

export function Router(routes) {
  if (!(this instanceof Router)) {
    throw new Error(`Router must call with new`);
  }
  return {
    routes,
    start
  }
}

Router.install = install;
