import { useState } from 'react'
import "../styles/expenses.css"

function FlightsExpenses() {
  const [showFlights, setShowFlights] = useState(false)

  const people = 5
  const flightCostPerPerson = 537.6
  const totalFlightCost = flightCostPerPerson * people

  return (
    <div className="expenses-section">
      <button
        className="flights-toggle-button"
        onClick={() => setShowFlights((s) => !s)}
      >
        Vuelos {showFlights}
      </button>

      {showFlights && (
        <div className="flight-card">
          <div className="hotel-card-selector active">
            <h4>Vuelos (ida y vuelta)</h4>

            <p>
              Total grupo: €{totalFlightCost.toFixed(2)}
            </p>

            <small>
              €{flightCostPerPerson.toFixed(2)} por persona
            </small>
          </div>
        </div>
      )}
    </div>
  )
}

export default FlightsExpenses
