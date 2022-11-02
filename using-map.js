
function citiesOnly (city) {
    return city.map(function (city) {
        return city.city
    })
}


function upperCasingStates(states) {
    return states.map(function (states) {
        let words = states.split(' ')
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1)
        }
        return words.join(' ')
    })
}


function fahrenheitToCelsius (temp) {
    return temp.map(function (temp) {
        let celsius = Math.round(((parseInt(temp) - 32) * 5 / 9))
        return (celsius + '°C')
    })
}



function trimTemp(obj) {
    return obj.map(function (obj) {
        let t = obj.temperature.replaceAll(' ', '')
        return t
    })
}


function tempForecasts(obj) {
    return obj.map(function (obj) {
        let t = obj.temperature.replaceAll(' ', '')
        let celsius = Math.round(((parseInt(t) - 32) * 5 / 9))
        let words = obj.state.split(' ')
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1)
        }
        let etat = words.join(' ')
        return (celsius + '°Celsius in ' + obj.city + ', ' + etat)
    })
}

   