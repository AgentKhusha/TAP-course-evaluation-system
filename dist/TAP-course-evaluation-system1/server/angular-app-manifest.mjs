
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/dashboard",
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SFBAROL5.js"
    ],
    "route": "/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-KN36UGVZ.js"
    ],
    "route": "/evaluate/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1156, hash: '0657059a36be3cc73a0a9b5b45d6c206b95626e77b12ede0d24c787b3246ad67', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1015, hash: 'ede0088e0a61a064553504b90681c9ea17023d6cf91ff76530cb51bc80c5a3dc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 8322, hash: '8cca94407f6605e9a007196ec7f19890ba0b2d466a225fda6d6db34dbd505650', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-724CNDSA.css': {size: 2634, hash: 'Vcwef5tVPRI', text: () => import('./assets-chunks/styles-724CNDSA_css.mjs').then(m => m.default)}
  },
};
