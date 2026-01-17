// components/expenses/OtherExpense.tsx
import React from 'react'

interface ExpenseItem {
  label: string
  pricePerPerson: number
}

const OtherExpense: React.FC = () => {
  const expenses: ExpenseItem[] = [
    { label: 'eSIM con holafly', pricePerPerson: 44.56 },
    { label: 'Seguro médico con Intermundial', pricePerPerson: 59.4 },
  ]

  return (
    <div className="hotels-cards">
      {expenses.map((expense) => (
        <div key={expense.label} className="hotel-card-selector">
          <h4>{expense.label}</h4>
          <p>Precio por persona: €{expense.pricePerPerson.toFixed(2)}</p>
        </div>
      ))}
    </div>
  )
}

export default OtherExpense
