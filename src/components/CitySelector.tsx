import { useState } from 'react'

interface CitySelectorProps {
  selectedCity: string | null
  setSelectedCity: (city: string) => void
}

function CitySelector({ selectedCity, setSelectedCity }: CitySelectorProps) {
  const [showDropdown, setShowDropdown] = useState(false)
  const cities: string[] = ['Kyoto', 'Tokyo', 'Osaka']

  const handleCityClick = (city: string) => {
    setSelectedCity(city)
    setShowDropdown(false)
  }

  return (
    <div className="city-selector" style={{ position: 'relative', display: 'inline-block' }}>
      <button
        className="hotel-button"
        onClick={() => setShowDropdown((s) => !s)}
        aria-expanded={showDropdown}
      >
        {selectedCity ?? 'Ciudades'}
      </button>

      {showDropdown && (
        <div
          className="dropdown"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            background: '#2a2a3e', // puedes usar var(--card-bg)
            border: '1px solid #4fa1ff', // var(--card-border)
            borderRadius: '8px',
            padding: '0.5rem 0',
            minWidth: '120px',
            zIndex: 1000,
          }}
        >
          {cities.map((city) => (
            <button
              key={city}
              className="hotel-button"
              style={{ width: '100%', margin: 0 }}
              onClick={() => handleCityClick(city)}
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
