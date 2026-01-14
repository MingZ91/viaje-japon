import { useState } from 'react'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '../styles/calendar.css'

function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const getTileContent = ({ date }: { date: Date }) => {
    // 16 de febrero = avión
    if (date.getMonth() === 1 && date.getDate() === 16) {
      return <span className="tile-icon">✈️</span>
    }
    // 3 de marzo = avión
    if (date.getMonth() === 2 && date.getDate() === 3) {
      return <span className="tile-icon">✈️</span>
    }
    // 17-19 de febrero = mostrar "Tokyo" debajo
    if (date.getMonth() === 1 && date.getDate() >= 17 && date.getDate() <= 19) {
      return (
        <div>
          <span className="tile-label">Tokyo</span>
        </div>
      )
    }
    // 20-22 de febrero = mostrar "Osaka" debajo
    if (date.getMonth() === 1 && date.getDate() >= 20 && date.getDate() <= 22) {
      return (
        <div>
          <span className="tile-label">Osaka</span>
        </div>
      )
    }
    // 23-25 de febrero = mostrar "Kyoto" debajo
    if (date.getMonth() === 1 && date.getDate() >= 23 && date.getDate() <= 25) {
      return (
        <div>
          <span className="tile-label">Kyoto</span>
        </div>
      )
    }
    // 26 febrero - 2 marzo = mostrar "Tokyo" debajo
    if ((date.getMonth() === 1 && date.getDate() >= 26) || (date.getMonth() === 2 && date.getDate() <= 2)) {
      return (
        <div>
          <span className="tile-label">Tokyo</span>
        </div>
      )
    }
    // 4 de marzo = mostrar "Madrid" debajo
    if (date.getMonth() === 2 && date.getDate() === 4) {
      return (
        <div>
          <span className="tile-label">Madrid</span>
        </div>
      )
    }
    return null
  }

  const getTileClassName = ({ date }: { date: Date }) => {
    // 17-19 de febrero = azul
    if (date.getMonth() === 1 && date.getDate() >= 17 && date.getDate() <= 19) {
      return 'tile-marked-blue'
    }
    // 20-22 de febrero = rojo
    if (date.getMonth() === 1 && date.getDate() >= 20 && date.getDate() <= 22) {
      return 'tile-marked-red'
    }
    // 23-25 de febrero = verde
    if (date.getMonth() === 1 && date.getDate() >= 23 && date.getDate() <= 25) {
      return 'tile-marked-green'
    }
    // 26 febrero - 2 marzo = azul
    if ((date.getMonth() === 1 && date.getDate() >= 26) || (date.getMonth() === 2 && date.getDate() <= 2)) {
      return 'tile-marked-blue'
    }
    // 4 de marzo = amarillo
    if (date.getMonth() === 2 && date.getDate() === 4) {
      return 'tile-marked-yellow'
    }
    return ''
  }

  return (
    <div className="calendar-wrapper">
      <div className="calendars-container">
        <div className="calendar-item">
            <ReactCalendar
        minDate={new Date(2026, 1, 1)}
        maxDate={new Date(2026, 2, 31)}
        value={selectedDate}
        onChange={(value, _event) => {
            // value puede ser null
            if (!value) return;

            // value puede ser Date o Date[]
            if (value instanceof Date) {
            setSelectedDate(value);
            } else if (Array.isArray(value) && value.length > 0) {
            setSelectedDate(value[0]); // o maneja el rango como quieras
            }
        }}
        tileContent={getTileContent}
        tileClassName={getTileClassName}
        showNeighboringMonth={false}
        />

        </div>
      </div>
      
    </div>
  )
}

export default Calendar
