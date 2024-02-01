function FormatMonth(month) {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "";
  }
}

function HistoryEvent({ data }) {
  if (!data || typeof data !== "object") {
    return <p>Loading fact...</p>;
  }

  const { month, day, year, event } = data;

  if (
    typeof month !== "number" ||
    typeof day !== "number" ||
    typeof year !== "number" ||
    typeof event !== "string"
  ) {
    return <p>Error: Invalid data format</p>;
  }

  return (
    <div className="history">
      <h2>
        {FormatMonth(month)} {day}, {year}
      </h2>
      <p>{event}</p>
    </div>
  );
}

export default HistoryEvent;
