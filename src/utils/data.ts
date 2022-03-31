export function formatDate(date) {
  var d = new Date(date),
    month = "" + d.getMonth(),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return `${day} de ${months[Number(month)]} de ${year}`;
}

export function formatMonth(date) {
  var d = new Date(date),
    month = "" + d.getMonth(),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return `${months[Number(month)]}`;
}

export function formatMonthNumber(month) {
  switch (month) {
    case "Janeiro":
      return 1;
      break;

    case "Fevereiro":
      return 2;
      break;

    case "Março":
      return 3;
      break;
    case "Abril":
      return 4;
      break;
    case "Maio":
      return 5;
      break;
    case "Junho":
      return 6;
      break;
    case "Julho":
      return 7;
      break;
    case "Agosto":
      return 8;
      break;
    case "Setembro":
      return 9;
      break;
    case "Outubro":
      return 10;
      break;
    default:
      break;
  }
}
