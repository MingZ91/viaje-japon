import { useState } from 'react'

function CitySelector() {
  const [showCities, setShowCities] = useState(false)

  const cities = ['Kyoto', 'Tokyo', 'Osaka']

  return (
    <div className="city-selector">
      <button
        onClick={() => setShowCities((s) => !s)}
        aria-expanded={showCities}
        aria-controls="cities-list"
      >
        Ciudades
      </button>

      {showCities && (
        <div id="cities-list" className="dropdown" role="menu">
          {cities.map((city) => (
            <button
              key={city}
              role="menuitem"
              onClick={() => console.log(city)}
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default CitySelector
