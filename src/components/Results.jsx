import "../App.css"

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


    //refactor to include divs to hold the different information {amt/ amt per time / }
    // flexbox or grid will make this easier to style
    if (amtOfDays > 30) {
      amtOfMonths = Math.floor(amtOfDays / 30);
      amtOfDays -= amtOfMonths * 30;
      newElement = (
        <p className="p-lot">
          <span className="span-accent">{amtOfMonths}</span> {amtOfMonths != 1 ? "months" : "month"} /{" "}
          <span className="span-accent">{amtOfDays % 1 != 0 ? amtOfDays.toFixed(2) : amtOfDays}</span>{" "}
          {amtOfDays != 1 ? "days" : "day"}
        </p>
      );
    } else if (amtOfDays > 7) {
      amtOfWeeks = Math.floor(amtOfDays / 7);
      amtOfDays -= amtOfWeeks * 7;
      newElement = (
        <p className="p-lot">
          <span className="span-accent">{amtOfWeeks}</span> {amtOfWeeks != 1 ? "weeks" : "week"} /{" "}
          <span className="span-accent">{amtOfDays % 1 != 0 ? amtOfDays.toFixed(2) : amtOfDays}</span>{" "}
          {amtOfDays != 1 ? "days" : "day"}
        </p>
      );
    } else {
      newElement = (
        <p className="p-lot">
          <span className="span-accent">{amtOfDays % 1 != 0 ? amtOfDays.toFixed(2) : amtOfDays}</span>{" "}
          {amtOfDays != 1 ? "days" : "day"}
        </p>
      );
    }
    components.push(
      <div className="div-result-field" key={index}>
        <p className="p-results-amount">{element}</p>
        {newElement}
      </div>
    );
  });

  return (
    <div className="div-container-results">
      <div className="div-fixed-container">
        <p className="p-fixed-rate">{fixedRate}</p>
        <p className="p-total-lot">Length of Time: <span className="span-ccent">{totalDiff}</span> days</p>
      </div>
      <div className="div-result-els-container">
        {components}
      </div>
    </div>
  );
}
