import { createStore } from 'vuex'

import themeModules from './themeModules/themeModules.js'
import generateModules from './generateModules/index.js'
const store = createStore({
  modules: { themeModules, generateModules }
})
export default store
