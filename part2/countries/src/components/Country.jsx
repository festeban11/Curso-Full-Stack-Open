import Weather from './Weather';
const Country = ({ country }) => {
    //console.log(country);
    return (
      <div>
        <h1>{country.name.common}</h1>
        <div>Capital: {country.capital}</div>
        <div>Area: {country.area} km²</div>
        <h3>Languages:</h3>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`${country.name.common} flag`} />
        <Weather city={country.capital} />
      </div>
    );
  };
  
  export default Country;