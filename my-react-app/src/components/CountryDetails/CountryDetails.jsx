import CountryData from "../CountryData/CountryData"

function CountryDetails({Country,  handleVisitedCountry, handleVisitedFlags }) {
  return (
    <div>
      <h4>Country Details</h4>
      <hr />
      <CountryData>
      Country={Country}
      handleVisitedCountry={handleVisitedCountry}
      handleVisitedFlags={handleVisitedFlags}
      </CountryData>
    </div>
  )
}

export default CountryDetails
