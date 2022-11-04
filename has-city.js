function hasCity(country, cities = []) {
    return cities.some(city => {
        for (let i = 0; i < country.length; i++) {
            if (country[cities]=== (city)){
                return `${city} is a city from ${country.name}`;
            }
            return `${city} is not a city from ${country.name}`;
        }
    });
}

