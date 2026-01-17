import { useState } from 'react'
import Calendar from '../components/Calendar'
import TravelExpenses from '../components/TravelExpenses'
import Navbar from '../components/NavBar'

function Home() {
  const [showExpenses] = useState(false)

  return (
    <>
      <h1>Viaje a Japón</h1>

      <Navbar />

      {showExpenses ? <TravelExpenses selectedExpense={''} /> : <Calendar />}
    </>
  )
}

export default Home
