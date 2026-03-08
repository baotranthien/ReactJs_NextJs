function whereAmI(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`Geocoding error (${response.status})`);
      }
      return response.json();
    })
    .then(function (data) {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data[0]);
    })
    .catch(function (err) {
      console.error(`Something went wrong: ${err.message}`);
    });
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
