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
    <div>
      <input
        id="startDate"
        type="date"
        onChange={handleChange}
        value={startDate.format('YYYY-MM-DD')}
      />
      <button onClick={handleClick}>Today</button>
      <input
        id="endDate"
        type="date"
        onChange={handleChange}
        value={endDate.format("YYYY-MM-DD")}
      />
    </div>
  );
}
