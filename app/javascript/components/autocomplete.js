let input = $('#easyAutocompleteURL')
let options = {
  getValue: 'name',
  url: function (phrase) {
    return '/autocomplete?q=' + phrase
  },
  categories: [
    {
      listLocation: 'ingredients',
      header: '<strong>Ingredients</strong>',
    },
    {
      listLocation: 'recipes',
      header: '<strong>Recipes</strong>',
    },
  ],

  list: {
    onChooseEvent: function () {
      let url = input.getSelectedItemData().url
      console.log(url)
      input.val('')
      window.location = `${url}`
    },
  },
}
input.easyAutocomplete(options)
console.log('korwa z javy')
