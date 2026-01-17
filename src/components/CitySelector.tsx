import { useState } from 'react'

function CitySelector() {
  const [showCities, setShowCities] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedCity, setSelectedCity] = useState<string | null>(null)

  const cities: string[] = ['Kyoto', 'Tokyo', 'Osaka']

  const handleCityClick = (city: string) => {
    setSelectedCity(city)
    setShowModal(true)
    setShowCities(false)
  }

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
              onClick={() => handleCityClick(city)}
            >
              {city}
            </button>
          ))}
        </div>
      )}

      {/* MODAL PLACEHOLDER */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selectedCity}</h3>
            <p>🚧 Por ahora esta opción no hace nada.</p>
            <button onClick={() => setShowModal(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CitySelector
