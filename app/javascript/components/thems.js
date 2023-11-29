class Themes {
  constructor() {
    this.theme = JSON.parse(localStorage.getItem('Theme'))

    this.themes = [
      {
        color_primary: '#eb2f64',
        color_primary_light: '#FF3366',
        color_primary_dark: '#BA265D',
        name: 'Pink',
      }, // main pink
      {
        color_primary: '#3d84f7',
        color_primary_light: '#5997f9',
        color_primary_dark: '#166df9',
        name: 'Blue',
      }, // blue
      {
        color_primary: '#01c1b5',
        color_primary_light: '#80fcf4',
        color_primary_dark: '#00a095',
        name: 'Ocean',
      }, // oceanblue
      {
        color_primary: '#0400fc',
        color_primary_light: '#706dff',
        color_primary_dark: '#0200a0',
        name: 'Nave blue',
      }, // nave-blue
      {
        color_primary: '#018725',
        color_primary_light: '#00f942',
        color_primary_dark: '#00a52c',
        name: 'Green',
      }, // green
      {
        color_primary: '#480187',
        color_primary_light: '#be75ff',
        color_primary_dark: '#8702fc',
        name: 'Violet',
      }, // violet
    ]
    if (this.theme) {
      console.log(this.theme + ' z konstruktora')
      let color = this.theme
      this.loadColors(
        this.themes[color].color_primary,
        this.themes[color].color_primary_light,
        this.themes[color].color_primary_dark
      )
    }
    this.loadThemes()
  }
  loadThemes() {
    let themeItems = this.themes.reduce(
      (html, theme, index) => (html += this.generateThemeList(theme, index)),
      ''
    )
    let menu_themes = document.getElementById('theme-chooser')
    menu_themes.innerHTML = themeItems
    menu_themes.addEventListener('click', (e) => {
      console.log(e.target.id)
      let color = e.target.id
      this.loadColors(
        this.themes[color].color_primary,
        this.themes[color].color_primary_light,
        this.themes[color].color_primary_dark
      )
      // document.documentElement.style.setProperty('--color-primary', this.themes[color].color_primary);
      // document.documentElement.style.setProperty('--color-primary-light', this.themes[color].color_primary_light);
      // document.documentElement.style.setProperty('--color-primary-dark', this.themes[color].color_primary_dark);
      this.saveTheme(color)
    })
  }

  saveTheme(color) {
    localStorage.setItem('Theme', JSON.stringify(color))
  }

  generateThemeList(theme, index) {
    return `
      <li class="user-nav__user-item"><a class="user-nav__user__link" href="#" id="${index}">${theme.name}</a></li>
    `
  }

  loadColors(col1, col2, col3) {
    document.documentElement.style.setProperty('--color-primary', col1)
    document.documentElement.style.setProperty('--color-primary-light', col2)
    document.documentElement.style.setProperty('--color-primary-dark', col3)
  }
}

window.onload = function () {
  let theme = new Themes()
}
