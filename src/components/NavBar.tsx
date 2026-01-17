// components/Navbar.tsx
import { useState } from 'react'
import TravelExpenses from './TravelExpenses'
import KyotoList from './KyotoList'
import OsakaList from './OsakaList'
import TokyoList from './TokyoList'
import '../styles/navbar.css'

export default function Navbar() {
  const [selectedExpense, setSelectedExpense] = useState<string | null>(null)
  const [openDropdown, setOpenDropdown] = useState<'city' | 'expense' | null>(null)

  const [showKyoto, setShowKyoto] = useState(false)
  const [showOsaka, setShowOsaka] = useState(false)
  const [showTokyo, setShowTokyo] = useState(false)

  const expenseOptions = [
    { value: 'hotels', label: 'Hoteles' },
    { value: 'flights', label: 'Vuelos' },
    { value: 'shopping', label: 'Compras' },
    { value: 'food', label: 'Comida' },
    { value: 'others', label: 'Otros' },
  ]

  const cityOptions = ['Kyoto', 'Tokyo', 'Osaka']

  const handleKyotoClick = () => {
    setShowKyoto(true)
    setShowOsaka(false)
    setShowTokyo(false)
    setSelectedExpense(null)
  }

  const handleOsakaClick = () => {
    setShowKyoto(false)
    setShowOsaka(true)
    setShowTokyo(false)
    setSelectedExpense(null)
  }

  const handleTokyoClick = () => {
    setShowKyoto(false)
    setShowOsaka(false)
    setShowTokyo(true)
    setSelectedExpense(null)
  }

  return (
    <div>
      <div className="navbar">
        {/* Botón Ciudades */}
        <div className="button-container">
          <button
            className="hotel-button"
            onClick={() =>
              setOpenDropdown(openDropdown === 'city' ? null : 'city')
            }
          >
            Ciudades
          </button>

          {openDropdown === 'city' && (
            <div className="dropdown">
              {cityOptions.map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    setOpenDropdown(null)
                    if (city === 'Kyoto') handleKyotoClick()
                    else if (city === 'Osaka') handleOsakaClick()
                    else if (city === 'Tokyo') handleTokyoClick()
                  }}
                >
                  {city}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Botón Gastos */}
        <div className="button-container">
          <button
            className="hotel-button"
            onClick={() =>
              setOpenDropdown(openDropdown === 'expense' ? null : 'expense')
            }
          >
            Gastos
          </button>

          {openDropdown === 'expense' && (
            <div className="dropdown">
              {expenseOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSelectedExpense(option.value)
                    setOpenDropdown(null)
                    setShowKyoto(false)
                    setShowOsaka(false)
                    setShowTokyo(false)
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Botón Maps */}
        <div className="button-container">
          <button
            className="hotel-button"
            onClick={() => {
              setOpenDropdown(null)
              setShowKyoto(false)
              setShowOsaka(false)
              setShowTokyo(false)
              setSelectedExpense(null)
              window.open(
                'https://www.google.com/maps/@35.1926925,136.3223411,8z/data=!3m1!5s0x60188c020580ff31:0xddafbdb58d6de596!4m12!1m8!3m7!1s0x60188c020f7e92d1:0xb61cf551ada0f90d!2sKikanbo!8m2!3d35.6936985!4d139.7724063!15sCg1raWthbmJvIHJhbWVuIgOIAQFaDyINa2lrYW5ibyByYW1lbpIBEHJhbWVuX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11f_p2kslz!11m2!2se3Swgj_Mc3lu_PWBe-E7G1gvjOx13A!3e3?authuser=2&entry=ttu',
                '_blank'
              )
            }}
          >
            Maps
          </button>
        </div>
      </div>

      {/* Renderizado condicional */}
      <div style={{ marginTop: '2rem' }}>
        {selectedExpense && <TravelExpenses selectedExpense={selectedExpense} />}
        {showKyoto && <KyotoList />}
        {showOsaka && <OsakaList />}
        {showTokyo && <TokyoList />}
      </div>
    </div>
  )
}
