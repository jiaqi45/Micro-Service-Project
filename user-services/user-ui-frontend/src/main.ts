import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from './lang'
import { store, key } from './store'

// Router will lead to unfavorable url. 
// Hence, it is disabled.
// To enable it, add the following 
//
// `import { router } from './route'`
// 
// to the import and use
// 
// `.use(router)`
// 
// in the created app

createApp(App)
  .use(store, key)
  .use(i18n)
  .mount('#app')
