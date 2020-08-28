import { registerMicroApps, start } from 'qiankun';

function routes2microApps(routes, loader) {
  const microApps = [];
  routes.map(route => {
    const { apps, path } = route;
    for(let key in apps) {
      const url = apps[key];
      microApps.push({
        name: key,
        entry: url,
        container: `#${key}`,
        loader,
        activeRule: path
      });
    }
  });
  return microApps;
}

function register(routes, loader) {
  let microApps = routes2microApps(routes, loader);
  registerMicroApps(microApps);
}

function install(Vue) {
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
        setTimeout(() => {
          register(router.routes, loader);
          router.start();
        }, 2000) 
      }
    },
  })
  // Vue.component();
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