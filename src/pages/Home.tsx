import { useState } from 'react'
import CitySelector from '../components/CitySelector'
import HotelSelector from '../components/HotelSelector'
import Calendar from '../components/Calendar'
import ExpensesTable from '../components/ExpensesTable'

function Home() {
  const [showExpenses, setShowExpenses] = useState(false)

  return (
    <>
      <h1>Viaje a Japón</h1>
      <div className="buttons">
        <HotelSelector />
        <CitySelector />
        <button onClick={() => setShowExpenses(!showExpenses)}>Gastos</button>
      </div>

      {showExpenses && <ExpensesTable />}

      {!showExpenses && <Calendar />}
    </>
  )
}

export default Home
