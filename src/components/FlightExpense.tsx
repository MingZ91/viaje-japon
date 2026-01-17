import "../styles/expenses.css"

function FlightsExpenses() {
  const people = 5
  const flightCostPerPerson = 537.6
  const totalFlightCost = flightCostPerPerson * people

  return (
    <div className="expenses-section">
      <div className="flight-card">
        <div className="hotel-card-selector active">
          <h4>Vuelo</h4>
          <p>Total grupo: €{totalFlightCost.toFixed(2)}</p>
          <small>€{flightCostPerPerson.toFixed(2)} por persona</small>
        </div>
      </div>
    </div>
  )
}

export default FlightsExpenses
