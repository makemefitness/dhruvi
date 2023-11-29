// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import '@hotwired/turbo-rails'
// import './controllers'
import * as bootstrap from 'bootstrap'

import 'trix'
import '@rails/actiontext'

import './src/jqury'
import '@nathanvda/cocoon'

// $('recipe_ingredients').cocoon()
// import './components/autocomplete'
$(function () {
  console.log('Hello world z korwy pierwszy start')
})
// import 'jquery_ujs'
// import 'popper'
import 'bootstrap'
document.addEventListener('turbo:load', function () {})
