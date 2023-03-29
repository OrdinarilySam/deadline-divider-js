export default function Results({ values, dates }) {
  const totalDiff = dates[1].diff(dates[0], "days") || 1;
  let totalSum = 0;
  const valArr = Object.values(values).filter((element) => element != 0);
  valArr.forEach((element) => {
    totalSum += Number(element);
  });

  const amtPerDay = totalSum / totalDiff;
  let amtPerWeek = 0;
  let amtPerMonth = 0;
  if (amtPerDay < 1) amtPerWeek = amtPerDay * 7;
  if (amtPerDay < 1 && amtPerWeek < 1) amtPerMonth = amtPerDay * 30;

  let fixedRate;
  if (amtPerMonth)
    fixedRate = `Amount per Month: ${
      amtPerMonth % 1 != 0 ? amtPerMonth.toFixed(2) : amtPerMonth
    }`;
  else if (amtPerWeek)
    fixedRate = `Amount per Week: ${
      amtPerWeek % 1 != 0 ? amtPerWeek.toFixed(2) : amtPerWeek
    }`;
  else
    fixedRate = `Amount per Day: ${
      amtPerDay % 1 != 0 ? amtPerDay.toFixed(2) : amtPerDay
    }`;

  const components = [];

  // Come back here later to determine actual months needed
  // With moment
  valArr.forEach((element, index) => {
    let amtOfDays = element / amtPerDay;
    let amtOfMonths = 0;
    let amtOfWeeks = 0;
    let newElement;

    if (amtOfDays > 30) {
      amtOfMonths = Math.floor(amtOfDays / 30);
      amtOfDays -= amtOfMonths * 30;
      newElement = (
        <p key={index}>
          {amtOfMonths} {amtOfMonths != 1 ? "months" : "month"} /{" "}
          {amtOfDays % 1 != 0 ? amtOfDays.toFixed(2) : amtOfDays}{" "}
          {amtOfDays != 1 ? "days" : "day"}
        </p>
      );
    } else if (amtOfDays > 7) {
      amtOfWeeks = Math.floor(amtOfDays / 7);
      amtOfDays -= amtOfWeeks * 7;
      newElement = (
        <p key={index}>
          {amtOfWeeks} {amtOfWeeks != 1 ? "weeks" : "week"} /{" "}
          {amtOfDays % 1 != 0 ? amtOfDays.toFixed(2) : amtOfDays}{" "}
          {amtOfDays != 1 ? "days" : "day"}
        </p>
      );
    } else {
      newElement = (
        <p key={index}>
          {amtOfDays % 1 != 0 ? amtOfDays.toFixed(2) : amtOfDays}{" "}
          {amtOfDays != 1 ? "days" : "day"}
        </p>
      );
    }
    components.push(newElement);
  });

  return (
    <div>
      <h2>Results</h2>
      <p>
        {fixedRate} | Length of Time: {totalDiff} days
      </p>
      {components}
    </div>
  );
}
