import { useEffect, useState } from "react";
import moment from 'moment'

export default function DateField({ setDates }) {
  const currDate = moment().startOf("day")

  const [startDate, setStartDate] = useState(currDate);
  const [endDate, setEndDate] = useState(currDate);

  useEffect(() => {
    setDates(() => [startDate, endDate]);
  }, [startDate, endDate]);

  function handleClick() {
    setStartDate(() => currDate)
  }

  function handleChange(event) {
    const newDate = moment(event.target.value, "YYYY-MM-DD").startOf('day')

    if (event.target.id === "startDate") {
      setStartDate(() => newDate);
    } else {
      setEndDate(() => newDate);
    }
  }

  return (
    <div className="div-container-datefield">
      <div className="div-container-first-date">
        <input
          id="startDate"
          className="input-start-date"
          type="date"
          onChange={handleChange}
          value={startDate.format('YYYY-MM-DD')}
        />
        <button 
          onClick={handleClick}
          className="button-today"
        >⟲</button>
      </div>
      <input
        id="endDate"
        className="input-end-date"
        type="date"
        onChange={handleChange}
        value={endDate.format("YYYY-MM-DD")}
      />
    </div>
  );
}
