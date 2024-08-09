const themeModules = {
  state() {
    return {
      theme: null
    }
  },
  actions: {
    getTheme(contex) {
      const html = document.querySelector('html')
      const theme = localStorage.getItem('theme') || contex.getters.preferdTheme
      contex.state.theme = theme
      html.setAttribute('data-theme', theme)
    },
    changeTheme(contex) {
      const html = document.querySelector('html')
      contex.state.theme = contex.state.theme === 'dark' ? 'light' : 'dark'
      html.setAttribute('data-theme', contex.state.theme)
      localStorage.setItem('theme', contex.state.theme)
    }
  },
  getters: {
    preferdTheme() {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      return prefersDarkScheme ? 'dark' : 'light'
    },
    theme(state) {
      return state.theme
    }
  }
}

export default themeModules
