// components/Navbar.tsx
import { useState } from 'react'
import TravelExpenses from './TravelExpenses'
import '../styles/navbar.css' // <-- Importar el CSS

export default function Navbar() {
  const [] = useState<string | null>(null)
  const [selectedExpense, setSelectedExpense] = useState('hotels')
  const [openDropdown, setOpenDropdown] = useState<'city' | 'expense' | null>(null)

  const expenseOptions = [
    { value: 'hotels', label: 'Hoteles' },
    { value: 'flights', label: 'Vuelos' },
    { value: 'shopping', label: 'Compras' },
    { value: 'food', label: 'Comida' },
    { value: 'others', label: 'Otros' },
  ]

  return (
    <div>
      <div className="navbar">
        {/* Contenedor para Ciudades */}
        <div className="button-container">
          <button
            className="hotel-button"
            onClick={() =>
              setOpenDropdown(openDropdown === 'city' ? null : 'city')
            }
          >
            Ciudades
          </button>

          {/* Dropdown Ciudades */}
          {openDropdown === 'city' && (
            <div className="dropdown">
              {['Kyoto', 'Tokyo', 'Osaka'].map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    setOpenDropdown(null)
                  }}
                >
                  {city}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Contenedor para Gastos */}
        <div className="button-container">
          <button
            className="hotel-button"
            onClick={() =>
              setOpenDropdown(openDropdown === 'expense' ? null : 'expense')
            }
          >
            Gastos
          </button>

          {/* Dropdown Gastos */}
          {openDropdown === 'expense' && (
            <div className="dropdown">
              {expenseOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSelectedExpense(option.value)
                    setOpenDropdown(null)
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card del gasto seleccionado */}
      <div style={{ marginTop: '2rem' }}>
        {selectedExpense === 'hotels' && <TravelExpenses selectedExpense="hotels" />}
        {selectedExpense === 'flights' && <TravelExpenses selectedExpense="flights" />}
        {selectedExpense === 'shopping' && <TravelExpenses selectedExpense="shopping" />}
        {selectedExpense === 'food' && <TravelExpenses selectedExpense="food" />}
        {selectedExpense === 'others' && <TravelExpenses selectedExpense="others" />}
      </div>
    </div>
  )
}