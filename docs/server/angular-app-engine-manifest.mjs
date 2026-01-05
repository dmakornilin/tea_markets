
export default {
  basePath: '/tea_markets',
  supportedLocales: {
  "ru-RU": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
