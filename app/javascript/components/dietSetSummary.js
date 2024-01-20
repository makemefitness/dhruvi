window.addEventListener('load', () => {
  setTimeout(function () {
    summaryDiet()
  }, 1000)
  document.getElementById('info-toggler').addEventListener('click', () => {
    document
      .getElementById('table-toggler')
      .classList.toggle('table-toggler-js')
  })
  allElements()
})

function calculateIngredients(event) {
  allElements()
  setTimeout(function () {
    summaryDiet()
  }, 1000)
}
function allElements() {
  // Poszczegolne przepisy

  conteners = document.getElementsByClassName('nested-fields-diets')

  for (let i = 0; i < conteners.length; i++) {
    // Iterowanie przez poszczegolne ingredient pola
    iterateElements(conteners[i])
  }
  function iterateElements(contener) {
    if (contener.style.display != 'none') {
      elements = contener.getElementsByClassName('particular-ingredient')
      console.log('Poszczegulnych ingredientow' + elements.length)
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.display != 'none') {
          applyToEachElement(
            elements[i].getElementsByClassName('particular-ingredient-id')[0],
            elements.length
          )
        }
      }
    }
  }

  function applyToEachElement(element, iterator) {
    sum_energy = 0
    sum_protein = 0
    sum_fat = 0
    sum_carb = 0
    fetchPromise = fetch(`/admin/ingredients/${element.value}.json`)
    fetchPromise
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        energy =
          (data.energy *
            element.parentElement.nextElementSibling.getElementsByTagName(
              'input'
            )[0].value) /
          100
        sum_energy += energy
        //console.log(sum_energy + "-----ENERGY----")
        protein =
          (data.protein *
            element.parentElement.nextElementSibling.getElementsByTagName(
              'input'
            )[0].value) /
          100
        sum_protein += protein
        fat =
          (data.fat *
            element.parentElement.nextElementSibling.getElementsByTagName(
              'input'
            )[0].value) /
          100
        sum_fat += fat
        carb =
          (data.carbohydrate *
            element.parentElement.nextElementSibling.getElementsByTagName(
              'input'
            )[0].value) /
          100
        sum_carb += carb
        element.parentElement.nextElementSibling.nextElementSibling.getElementsByClassName(
          'energy'
        )[0].innerHTML = `Energii: <span class="energi">${energy.toFixed(
          2
        )}</span>kcal | Protein: <span class="protein">${protein.toFixed(
          2
        )}</span>g | Tłuszczu: <span class="fat">${fat.toFixed(
          2
        )}</span>g| Weglowo: <span class="carb">${carb.toFixed(2)}</span>g`
        showInTable(
          sum_energy.toFixed(0),
          sum_protein.toFixed(0),
          sum_fat.toFixed(0),
          sum_carb.toFixed(0)
        )
        document.getElementsByClassName('wynik')[0].innerText = `
  Energii: ${sum_energy.toFixed(0)}kcal | Prot: ${sum_protein.toFixed(
          0
        )}g | Tłu: ${sum_fat.toFixed(0)}g| Wegl: ${sum_carb.toFixed(0)}g`
      })
  }
  ////////////////////////////////////////////
  function applyToEachElement1(element) {
    sum_energy = 0
    sum_protein = 0
    sum_fat = 0
    fetchPromise = fetch(`/admin/ingredients/${element.value}.json`)
    fetchPromise
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        energy =
          (data.energy *
            element.parentElement.nextElementSibling.getElementsByTagName(
              'input'
            )[0].value) /
          100
        sum_energy += energy
        //console.log(sum_energy + "-----ENERGY----")
        protein =
          (data.protein *
            element.parentElement.nextElementSibling.getElementsByTagName(
              'input'
            )[0].value) /
          100
        sum_protein += protein
        fat =
          (data.fat *
            element.parentElement.nextElementSibling.getElementsByTagName(
              'input'
            )[0].value) /
          100
        sum_fat += fat
        element.parentElement.nextElementSibling.nextElementSibling.getElementsByClassName(
          'energy'
        )[0].innerText = `Energii: ${energy.toFixed(
          2
        )}kcal | Protein: ${protein.toFixed(2)}g | Tłuszczu: ${fat.toFixed(2)}g`

        document.getElementsByClassName('wynik')[0].innerText = `
  Energii: ${sum_energy.toFixed(0)}kcal | Prot: ${sum_protein.toFixed(
          0
        )}g | Tłu: ${sum_fat.toFixed(0)}g`
        showInTable()
      })
  }

  function showInTable(energy, protein, fat, carb) {
    document.getElementsByClassName('tab-energy')[0].innerText = energy + 'kcal'
    document.getElementsByClassName('tab-protein')[0].innerText = protein + 'g'
    document.getElementsByClassName('tab-fat')[0].innerText = fat + 'g'
    document.getElementsByClassName('tab-carb')[0].innerText = carb + 'g'
  }
}

function summaryDiet() {
  const diets = document.getElementsByClassName('nested-fields-diets')
  for (let i = 0; i < diets.length; i++) {
    sum_energy = 0
    sum_protein = 0
    sum_fat = 0
    sum_carb = 0
    for (let y = 0; y < diets[i].getElementsByClassName('energy').length; y++) {
      sum_energy =
        sum_energy +
        parseFloat(
          diets[i]
            .getElementsByClassName('energy')
            [y].getElementsByClassName('energi')[0].innerText
        )
      sum_protein =
        sum_protein +
        parseFloat(
          diets[i]
            .getElementsByClassName('energy')
            [y].getElementsByClassName('protein')[0].innerText
        )
      sum_fat =
        sum_fat +
        parseFloat(
          diets[i]
            .getElementsByClassName('energy')
            [y].getElementsByClassName('fat')[0].innerText
        )
      sum_carb =
        sum_carb +
        parseFloat(
          diets[i]
            .getElementsByClassName('energy')
            [y].getElementsByClassName('carb')[0].innerText
        )
      diets[i].getElementsByClassName(
        'particular-diet-summary'
      )[0].innerHTML = `<span>Energii zmienone: ${sum_energy.toFixed(
        0
      )}kcal | Prot: ${sum_protein.toFixed(0)}g | Tłu: ${sum_fat.toFixed(
        0
      )}g| Wegl: ${sum_carb.toFixed(0)}g</span>`
    }
  }
}
