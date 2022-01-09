export async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();

  return countries.filter((c) => c.cioc).map(sparseCountry);
}

export async function getCountriesId() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();

  return countries
    .filter((c) => c.cioc)
    .map((country) => ({
      params: {
        countryCioc: country.cioc,
      },
    }));
}

export async function getCountryData(countryCioc) {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${countryCioc}`
  );
  const country = await response.json();
  const sparse = sparseCountry(country[0]);

  return {
    countryCioc: sparse.cioc,
    ...sparse,
  };
}

function sparseCountry(country) {
  const cioc = country.cioc || country.cca3 || country.cca2;
  const cca2 = country.cca2;
  const name = country.name["common"] || country.name["official"];
  const capital = country.capital ? country.capital[0] : null;
  const flag = country.flags["svg"].includes("flagcdn")
    ? country.flags["svg"]
    : null;
  const region = country.region;
  const population = country.population;
  const subregion = country.subregion ? country.subregion : null;

  return { cca2, name, capital, flag, region, population, subregion, cioc };
}
