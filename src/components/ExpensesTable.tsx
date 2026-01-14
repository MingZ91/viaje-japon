import { useState } from 'react'
import '../styles/expenses.css'

function ExpensesTable() {
  const [hotelPrices, setHotelPrices] = useState({
    tokyo1: { total: 420, nights: 3 },
    osaka: { total: 208.48, nights: 3 },
    kyoto: { total: 414, nights: 3 },
    tokyo2: { total: 623.2, nights: 4 },
  })

  const [expenses, setExpenses] = useState({
    Gemma: { tokyo1: false, osaka: false, kyoto: false, tokyo2: false },
    Nuria: { tokyo1: false, osaka: false, kyoto: false, tokyo2: false },
    Nina: { tokyo1: false, osaka: false, kyoto: false, tokyo2: false },
    Ming: { tokyo1: false, osaka: false, kyoto: false, tokyo2: false },
    Dario: { tokyo1: false, osaka: false, kyoto: false, tokyo2: false },
  })

  const [selectedHotel, setSelectedHotel] = useState('tokyo1')

  const people = ['Gemma', 'Nuria', 'Nina', 'Ming', 'Dario']
  const hotels = [
    { key: 'tokyo1', label: 'Hotel Tokyo 1' },
    { key: 'osaka', label: 'Hotel Osaka' },
    { key: 'kyoto', label: 'Hotel Kyoto' },
    { key: 'tokyo2', label: 'Hotel Tokyo 2' },
  ]

  const handlePriceChange = (hotel: string, field: string, value: string) => {
    setHotelPrices({
      ...hotelPrices,
      [hotel]: {
        ...hotelPrices[hotel as keyof typeof hotelPrices],
        [field]: parseFloat(value) || 0,
      },
    })
  }

  const handlePaidChange = (person: string) => {
    setExpenses({
      ...expenses,
      [person]: {
        ...expenses[person as keyof typeof expenses],
        [selectedHotel]: !expenses[person as keyof typeof expenses][selectedHotel as keyof typeof expenses[keyof typeof expenses]],
      },
    })
  }

  const getPricePerPerson = (hotelKey: string) => {
    const hotel = hotelPrices[hotelKey as keyof typeof hotelPrices]
    const paidCount = people.filter((p) => expenses[p as keyof typeof expenses][hotelKey as keyof typeof expenses[keyof typeof expenses]]).length
    if (paidCount === 0) return 0
    return hotel.total / paidCount
  }

  const getPricePerNight = (hotelKey: string) => {
    const hotel = hotelPrices[hotelKey as keyof typeof hotelPrices]
    if (hotel.nights === 0) return 0
    return hotel.total / hotel.nights
  }

  const getTotalExpenses = () => {
    return Object.values(hotelPrices).reduce((sum, hotel) => sum + hotel.total, 0)
  }

  const currentHotel = hotels.find((h) => h.key === selectedHotel)
  const currentHotelPrice = hotelPrices[selectedHotel as keyof typeof hotelPrices]

  return (
    <div className="expenses-wrapper">
      <h2>Gastos del Viaje</h2>
      
      <div className="summary-info">
        <p><strong>Total Gastos:</strong> €{getTotalExpenses().toFixed(2)}</p>
      </div>

      <div className="hotel-buttons">
        {hotels.map((hotel) => (
          <button
            key={hotel.key}
            className={`hotel-button ${selectedHotel === hotel.key ? 'active' : ''}`}
            onClick={() => setSelectedHotel(hotel.key)}
          >
            {hotel.label}
          </button>
        ))}
      </div>

      {currentHotel && (
        <div className="hotel-card">
          <h3>{currentHotel.label}</h3>
          
          <div className="hotel-info">
            <div className="info-field">
              <label>Precio Total:</label>
              <input
                type="number"
                value={currentHotelPrice.total}
                disabled
                className="info-input"
              />
            </div>
            <div className="info-field">
              <label>Noches:</label>
              <input
                type="number"
                value={currentHotelPrice.nights}
                onChange={(e) => handlePriceChange(selectedHotel, 'nights', e.target.value)}
                placeholder="0"
                className="info-input"
              />
            </div>
            <div className="info-field">
              <label>Precio por Noche:</label>
              <span className="info-value">€{getPricePerNight(selectedHotel).toFixed(2)}</span>
            </div>
            <div className="info-field">
              <label>Precio por Persona:</label>
              <span className="info-value">€{getPricePerPerson(selectedHotel).toFixed(2)}</span>
            </div>
          </div>

          <div className="card-header">
            <span>Persona</span>
            <span className="paid-header">Pagado</span>
          </div>
          <div className="card-content">
            {people.map((person) => (
              <div key={person} className="person-row">
                <span className="person-name">{person}</span>
                <input
                  type="checkbox"
                  checked={expenses[person as keyof typeof expenses][selectedHotel as keyof typeof expenses[keyof typeof expenses]] as boolean}
                  onChange={() => handlePaidChange(person)}
                  className="paid-checkbox"
                  title="Pagado"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ExpensesTable
