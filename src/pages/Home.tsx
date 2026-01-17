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
  const [showShopping, setShowShopping] = useState(true)

  return (
    <div>
      <button
        className="flights-toggle-button"
        onClick={() => setShowShopping(!showShopping)}
        style={{ marginTop: "20px" }}
      >
        Compras {showShopping ? "▲" : "▼"}
      </button>

      {showShopping && (
        <div className="expenses-section">
          <div className="hotel-card-selector active">
            <h4>Compras / Souvenirs</h4>
            <p>No hay gastos registrados por ahora.</p>
          </div>
        </div>
      )}
    </div>
  )
}

function TravelExpenses() {
  const [showFlights, setShowFlights] = useState(true) // Vuelos por defecto visible

  return (
    <div className="expenses-section">
      {/* Hoteles */}
      <HotelsExpenses />

      {/* Botón toggle para vuelos */}
      <button
        className="flights-toggle-button"
        onClick={() => setShowFlights((s) => !s)}
        style={{ marginTop: "20px" }}
      >
        Vuelos {showFlights ? "▲" : "▼"}
      </button>

      {/* Sección vuelos */}
      {showFlights && <FlightsExpenses />}

      {/* Sección compras */}
      <ShoppingExpenses />
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
        <button onClick={() => setShowExpenses(!showExpenses)}>Gastos</button>
      </div>

      {/* Sección de gastos */}
      {showExpenses && <TravelExpenses />}

      {/* Calendario si no hay gastos */}
      {!showExpenses && <Calendar />}
    </>
  )
}

export default Home
