import "../styles/expenses.css"

function HotelsExpenses() {
  const hotels = [
    {
      label: 'Tokyo 1 - Shinjuku YC Hostel-SJ0399',
      total: 420,
      nights: 3,
      url: 'https://www.booking.com/hotel/jp/shinjuku-yc-hostel.es.html?...',
    },
    {
      label: 'Osaka - Apartamento en Chuo',
      total: 208.48,
      nights: 3,
      url: 'https://www.airbnb.es/rooms/1170709361090052403?...',
    },
    {
      label: "Kyoto - Hotel M's Est Shijo Karasuma",
      total: 414,
      nights: 3,
      url: 'https://www.booking.com/hotel/jp/ms-est-shijo-karasuma.es.html?...',
    },
    {
      label: 'Tokyo 2 - Apartamento en Shinjuku',
      total: 623.2,
      nights: 4,
      url: 'https://www.airbnb.es/rooms/1399764565783175882?...',
    },
  ]

  const people = 5

  const pricePerNight = (total, nights) =>
    nights === 0 ? 0 : total / people / nights

  const pricePerPerson = (total) => total / people

  return (
    <div className="expenses-section">
      {/* Eliminamos el botón y mostramos directamente los hoteles */}
      <div className="hotel-cards">
        {hotels.map((hotel) => (
          <div
            key={hotel.label}
            className="hotel-card-selector active"
            onClick={() => window.open(hotel.url, "_blank")}
            style={{ cursor: "pointer" }} // Cambia el cursor al pasar por encima
          >
            <h4>{hotel.label}</h4>
            <p>
              €{hotel.total.toFixed(2)} · {hotel.nights} noches
            </p>
            <small>
              €{pricePerNight(hotel.total, hotel.nights).toFixed(2)} / noche /
              persona
            </small>
            <div className="card-divider" />
            <span>
              <strong>Precio por persona:</strong> €
              {pricePerPerson(hotel.total).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HotelsExpenses
