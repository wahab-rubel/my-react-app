import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetails/CountryDetails';

function Country({ Country, handleVisitedCountry, handleVisitedFlags }) {
const {name, flags, population, area, capital, altSpellings, region, cca2} = Country;


const [Visited, setVisited] = useState(false)

const handleVisited = () => {
  setVisited(!Visited)
}




  return (
    <div className={`country ${Visited ? 'visited' : 'non-visited'}`}>
      <h3 style={{color: Visited ? 'purple' : 'white'}}>Name: {name.common}</h3>
      <img src={flags.png} />
      <p>Population: {population}</p>
      <p>area: {area}</p>
      <p>official: {name.official}</p>
      <p>Capital: {capital}</p>
      <p>altSpellings: {altSpellings}</p>
      <p>region: {region}</p>
      <p><small>Code: {cca2}</small></p>
      <button onClick={() =>handleVisitedCountry(Country)}>Mark visited</button> <br />
      <button onClick={() => handleVisitedFlags(Country.flags.png)}>Add Flag</button>
      <button onClick={handleVisited}>{Visited ? 'visited' : 'Going on'}</button> 
      {Visited ? 'I have visited this country.' : 'I want visited it'}
      <hr />
      <CountryDetails>
        country={Country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      </CountryDetails>
    </div>
  )
}

export default Country
