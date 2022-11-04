function hasCity(country, cities = []) {
    return cities.some(city => {
       if (country.cities.includes(city)){
              return `${city} is a city from ${country.name}`;
       }
       return `${city} is not a city from ${country.name}`;
    });
}