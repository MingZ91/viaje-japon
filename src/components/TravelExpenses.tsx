// components/expenses/TravelExpenses.tsx
import HotelsExpenses from './HotelsExpenses'
import FlightsExpenses from './FlightExpense'
import ShoppingExpenses from './ShoppingExpenses'
import OtherExpense from './OtherExpenses'

interface TravelExpensesProps {
  selectedExpense: string
}

function TravelExpenses({ selectedExpense }: TravelExpensesProps) {
  return (
    <div className="expenses-section">
      {selectedExpense === 'hotels' && <HotelsExpenses />}
      {selectedExpense === 'flights' && <FlightsExpenses />}
      {selectedExpense === 'shopping' && <ShoppingExpenses />}
      {selectedExpense === 'others' && <OtherExpense />}
    </div>
  )
}

export default TravelExpenses
