'use strict'

const WIZARD_QUANTITY = 4

const WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
]

const WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
]

const WIZARD_COAT_COLORS = [
  'rgb(241, 43, 107)',
  'rgb(101, 137, 164)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
]

const WIZARD_EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
]

var setup = document.querySelector('.setup')
setup.classList.remove('hidden')

const getRandomItem = function (arr) {
  var randomItem = arr[Math.floor(Math.random() * arr.length)]
  return randomItem
}

var similarWizards = []

const wizardRender = function (names, surnames, coatColors, eyesColors, quantity) {
  for (let i = 0; i < quantity; i++) {
    var wizards = {
      name: `${getRandomItem(names)}` + ` ${getRandomItem(surnames)}`,
      coatColor: getRandomItem(coatColors),
      eyesColor: getRandomItem(eyesColors)
    }
    similarWizards.push(wizards)
  }
}

wizardRender(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT_COLORS, WIZARD_EYES_COLORS, WIZARD_QUANTITY)
console.log(similarWizards)
