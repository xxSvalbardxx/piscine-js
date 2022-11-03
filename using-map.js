
function citiesOnly (obj) {
    return obj.map(function (city) {
        return city.city
    })
}


function upperCasingStates(obj) {
    return obj.map(function (states) {
        let words = states.split(' ')
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1)
        }
        return words.join(' ')
    })
}


function fahrenheitToCelsius (temp) {
    return temp.map(function (temp) {
        let celsius = Math.floor(((parseInt(temp) - 32) * 5 / 9))
        return (celsius + '°C')
    })
}

trimTemp([
    { city: 'Los Angeles', temperature: '  101 °F   ' },
    { city: 'San Francisco', temperature: ' 84 ° F   ' },
  ])

function trimTemp(obj) {
    return obj.map(function (obj) {
        let t = obj.temperature.replaceAll(' ', '')
        obj['temperature'] = t
        console.log(obj)
        return obj
    })
}


function tempForecasts(obj) {
    return obj.map(function (obj) {
        let t = obj.temperature.replaceAll(' ', '')
        let celsius = Math.floor(((parseInt(t) - 32) * 5 / 9))
        let words = obj.state.split(' ')
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1)
        }
        let etat = words.join(' ')
        return (celsius + '°Celsius in ' + obj.city + ', ' + etat)
        
    })
}

/*
const tempForecasts = (arr) => {
    return arr.map(obj => {

        let temp = Math.floor((parseInt(obj.temperature) - 32) * (5/9));
        let city = upperCasingStates([obj.city])[0];
        let state = upperCasingStates([obj.state])[0];

        return `${temp}°Celsius in ${city}, ${state}`;
        
    });
}
*/