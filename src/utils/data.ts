export function formatDate(date) {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const dateWithoutTime = date.split('T')[0];
  const [year, monthIndex, day] = dateWithoutTime.split('-');
  const month = months[Number(monthIndex) - 1];

  return `${day} de ${month} de ${year}`;
}

export function formatMonth(date) {
  var d = new Date(date),
    month = '' + d.getMonth(),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  return months[Number(month)];
}

export function formatMonthNumber(month) {
  switch (month) {
    case 'Janeiro':
      return 1;

    case 'Fevereiro':
      return 2;

    case 'Março':
      return 3;

    case 'Abril':
      return 4;

    case 'Maio':
      return 5;

    case 'Junho':
      return 6;

    case 'Julho':
      return 7;

    case 'Agosto':
      return 8;

    case 'Setembro':
      return 9;

    case 'Outubro':
      return 10;

    case 'Novembro':
      return 11;

    case 'Dezembro':
      return 12;

    default:
      break;
  }
}
