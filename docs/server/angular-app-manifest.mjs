
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/tea_markets/',
  locale: "ru-RU",
  routes: [
  {
    "renderMode": 2,
    "route": "/tea_markets"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UMRSG2WA.js",
      "chunk-J66YECPH.js"
    ],
    "route": "/tea_markets/order"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UMRSG2WA.js",
      "chunk-J66YECPH.js"
    ],
    "route": "/tea_markets/success"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QBNWVEGD.js",
      "chunk-J66YECPH.js"
    ],
    "route": "/tea_markets/catalog"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QBNWVEGD.js",
      "chunk-J66YECPH.js"
    ],
    "route": "/tea_markets/tea-card"
  },
  {
    "renderMode": 2,
    "redirectTo": "/tea_markets",
    "route": "/tea_markets/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5265, hash: '18a1f3e04cc392f56146db53e2785b87ae130bd8c44324a376891055adbd40e5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1237, hash: '64dd47a7c6509dd52fc9daf7f45d2584512f49b37845f48993b3bb591343b130', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 31560, hash: '033cb4f2abc2786e577abd3de208986253d5fc6a30a94e53f28c791361478b17', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'order/index.html': {size: 21818, hash: 'f6d8d59e08acffa0b39a549d6ff5984d561e4f91443611565f0ead57498c0685', text: () => import('./assets-chunks/order_index_html.mjs').then(m => m.default)},
    'success/index.html': {size: 16924, hash: 'b383b75f235321132959ac215f5228884f7e12b6d51660e69c2f8937ed17fb60', text: () => import('./assets-chunks/success_index_html.mjs').then(m => m.default)},
    'catalog/index.html': {size: 30489, hash: 'ac3551d663ba0fe7d4215d5cd1b885fb296456864478e9e946364ed45bc576a7', text: () => import('./assets-chunks/catalog_index_html.mjs').then(m => m.default)},
    'tea-card/index.html': {size: 16403, hash: 'cadb6084e214d3aa9b146281cbc33197c919d7736d8bb29bb60558c6c380f6b5', text: () => import('./assets-chunks/tea-card_index_html.mjs').then(m => m.default)},
    'styles-HV4TVURV.css': {size: 234753, hash: 'Kf0lk0Pzpa4', text: () => import('./assets-chunks/styles-HV4TVURV_css.mjs').then(m => m.default)}
  },
};
