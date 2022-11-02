console.log(citiesOnly([
    {
      city: 'Los Angeles',
      temperature: '  101 °F   ',
    },
    {
      city: 'San Francisco',
      temperature: ' 84 ° F   ',
    },
  ]))
// ['Los Angeles', 'San Francisco']
function citiesOnly (city) {
    return city.map(function (city) {
        return city.city
    })
}


console.log(upperCasingStates(['alabama', 'new jersey']))
// ['Alabama', 'New Jersey']
// must uppercase the first letter of each word
function upperCasingStates(states) {
    return states.map(function (states) {
        let words = states.split(' ')
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1)
        }
        return words.join(' ')
    })
}


console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']));
// [20, 15, -4]

function fahrenheitToCelsius (temp) {
    return temp.map(function (temp) {
        let celsius = Math.round((parseInt(temp) - 32) * 5 / 9)
        return (celsius + '°C')
    })
}


console.log(trimTemp([{ city: 'Los Angeles', temperature: '  101 °F   ' },
{ city: 'San Francisco', temperature: ' 84 ° F   ' },
]))
/* -> [
{ city: 'Los Angeles', temperature: '101°F' },
{ city: 'San Francisco', temperature: '84°F' },
] */

function trimTemp(obj) {
    return obj.map(function (obj) {
        let t = obj.temperature.replaceAll(' ', '')
        return t
    })
}

console.log(tempForecasts([
    {
      city: 'Pasadena',
      temperature: ' 101 °F',
      state: 'new jersey',
      region: 'West',
    },
  ])) // -> ['38°Celsius in Pasadena, New Jersey']

function tempForecasts(obj) {
    return obj.map(function (obj) {
        let t = obj.temperature.replaceAll(' ', '')
        let celsius = Math.round((parseInt(t) - 32) * 5 / 9)
        let words = obj.state.split(' ')
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1)
        }
        let etat = words.join(' ')
        return (celsius + '°Celsius in ' + obj.city + ', ' + etat)
    })
}

   