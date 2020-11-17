// path: location.href start with path, not strict
const host = 'http://0.0.0.0';

export default [
  { 
    path: "/one",
    app: `${host}:8081`
  },
  { 
    path: "/two",
    app: `${host}:8082`
  },
  // { 
  //   path: "/vue/two",
  //   apps: {
  //     one: `${host}:8081`,
  //   }
  // },
];
