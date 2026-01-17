import { useState } from 'react'
import CitySelector from '../components/CitySelector'
import Calendar from '../components/Calendar'
import HotelsExpenses from '../components/HotelsExpenses'

function FlightsExpenses() {
  const people = 5
  const flightCostPerPerson = 537.6
  const totalFlightCost = flightCostPerPerson * people

  return (
    <div className="flight-card">
      <div className="hotel-card-selector active">
        <h4>Vuelos</h4>
        <p>Total grupo: €{totalFlightCost.toFixed(2)}</p>
        <small>€{flightCostPerPerson.toFixed(2)} por persona</small>
      </div>
    </div>
  )
}

function ShoppingExpenses() {
  return (
    <div className="expenses-section">
      <div className="hotel-card-selector active">
        <h4>Compras / Souvenirs</h4>
        <p>No hay gastos registrados por ahora.</p>
      </div>
    </div>
  )
}

function TravelExpenses() {
  const [selectedExpense, setSelectedExpense] = useState<string>('hotels')

  return (
    <div className="expenses-section">
      {/* Dropdown para seleccionar categoría */}
      <select
        className="expense-dropdown"
        value={selectedExpense}
        onChange={(e) => setSelectedExpense(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px' }}
      >
        <option value="hotels">Hoteles</option>
        <option value="flights">Vuelos</option>
        <option value="shopping">Compras</option>
        <option value="food">Comida</option>
        <option value="tickets">Tickets</option>
      </select>

      {/* Renderizado condicional de la sección */}
      {selectedExpense === 'hotels' && <HotelsExpenses />}
      {selectedExpense === 'flights' && <FlightsExpenses />}
      {selectedExpense === 'shopping' && <ShoppingExpenses />}
    </div>
  )
}

function Home() {
  const [showExpenses, setShowExpenses] = useState(false)

  return (
    <>
      <h1>Viaje a Japón</h1>
      <div className="buttons">
        <CitySelector />
        <button onClick={() => setShowExpenses((s) => !s)}>Gastos</button>
      </div>

      {/* Sección de gastos */}
      {showExpenses && <TravelExpenses />}

      {/* Calendario si no hay gastos */}
      {!showExpenses && <Calendar />}
    </>
  )
}

export default Home
