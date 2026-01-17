// src/components/ShoppingExpenses.js
import React from 'react'
import "../styles/expenses.css"

function ShoppingExpenses() {
  // Por ahora no hay gastos, solo un mensaje
  return (
    <div className="expenses-section">
      <div className="hotel-card-selector active">
        <h4>Compras / Souvenirs</h4>
        <p>No hay gastos registrados por ahora.</p>
      </div>
    </div>
  )
}

export default ShoppingExpenses
