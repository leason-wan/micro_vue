// path: location.href start with path, not strict

export default [
  { 
    path: "/vue",
    apps: {
      one: 'http://192.168.25.55:8081',
    }
  },
  { 
    path: "/two",
    apps: {
      'two_one': 'http://192.168.25.55:8082',
      'two_two': 'http://192.168.25.55:8083',
    }
  },
];
