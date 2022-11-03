const planets = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
}
let year = 31557600;

function dogYears(planet , age){

    age = age / year // age in earth years
    let period = planets[planet]
    age = age / period
    age = age * 7

    return Math.round(age * 100) / 100 ; // round to 2 decimals
}
