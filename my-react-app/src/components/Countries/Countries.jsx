import { useEffect} from "react"
import { useState } from "react"
import Country from "../Country/Country";
import './Countres.css'


function Countries () {
  const [countries, setCountries] = useState ([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState ([]);

  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])


  const handleVisitedCountry = country => {
    console.log('add this to your visited country')
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries)
  }

  const handleVisitedFlags = Flag =>{
    const newVisitedFlags = [...visitedFlags, Flag];
    setVisitedFlags(newVisitedFlags)
  }

  // remove item from an array 

  return (
    <div>
      <h3>This is Countries: {Countries.length}</h3>
      {/* visited country */}
      <div>
      <h5>Visited Countries: {visitedCountries.length} </h5>
      <ul>
        {
          visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
        }
      </ul>
      </div>
      <div className="flag-container">
        {
          visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
        }
      </div>
      {/* display countries*/}
      <div className="country-container">
      {
        countries.map(country =><Country key={country.cca3}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
        Country={country}></Country>)
      }
      </div>
    </div>
  );
};

export default Countries
