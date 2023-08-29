import { formatDate, formatMonth, formatMonthNumber } from '../data';

describe('Testando funções utils', () => {
  test('Formata datas de lançamentos de filmes', () => {
    const dataMock = '2022-08-05T00:00:00.000Z';
    const dataMock2 = '2022-03-25T00:00:00.000Z';
    const dataMock3 = '2023-08-03T03:00:00.000Z';
    const dataMock4 = '2022-04-01T03:00:00.000Z';
    const dataMock5 = '2022-01-25T00:00:00.000Z';
    const dataMock6 = '2023-02-03T03:00:00.000Z';
    const dataMock7 = '2022-05-01T03:00:00.000Z';
    const dataMock8 = '2022-06-25T00:00:00.000Z';
    const dataMock9 = '2023-07-03T03:00:00.000Z';
    const dataMock10 = '2022-09-01T03:00:00.000Z';
    const dataMock11 = '2022-10-01T03:00:00.000Z';
    const dataMock12 = '2022-11-01T03:00:00.000Z';
    const dataMock13 = '2022-12-01T03:00:00.000Z';

    const novaData = formatDate(dataMock);
    expect(novaData).toBe('05 de Agosto de 2022');

    const novaData2 = formatDate(dataMock2);
    expect(novaData2).toBe('25 de Março de 2022');

    const novaData3 = formatDate(dataMock3);
    expect(novaData3).toBe('03 de Agosto de 2023');

    const novaData4 = formatDate(dataMock4);
    expect(novaData4).toBe('01 de Abril de 2022');

    const novaData5 = formatDate(dataMock5);
    expect(novaData5).toBe('25 de Janeiro de 2022');

    const novaData6 = formatDate(dataMock6);
    expect(novaData6).toBe('03 de Fevereiro de 2023');

    const novaData7 = formatDate(dataMock7);
    expect(novaData7).toBe('01 de Maio de 2022');

    const novaData8 = formatDate(dataMock8);
    expect(novaData8).toBe('25 de Junho de 2022');

    const novaData9 = formatDate(dataMock9);
    expect(novaData9).toBe('03 de Julho de 2023');

    const novaData10 = formatDate(dataMock10);
    expect(novaData10).toBe('01 de Setembro de 2022');

    const novaData11 = formatDate(dataMock11);
    expect(novaData11).toBe('01 de Outubro de 2022');

    const novaData12 = formatDate(dataMock12);
    expect(novaData12).toBe('01 de Novembro de 2022');

    const novaData13 = formatDate(dataMock13);
    expect(novaData13).toBe('01 de Dezembro de 2022');
    expect([novaData, novaData12, novaData11, novaData13]).toMatchSnapshot();
  });

  test('Formata mês', () => {
    const dataMock =
      'Mon Aug 28 2023 14:39:57 GMT-0300 (Horário Padrão de Brasília)';
    const dataMock2 =
      'Mon Jun 05 2023 14:39:57 GMT-0300 (Horário Padrão de Brasília)';

    const novaData = formatMonth(dataMock);
    expect(novaData).toBe('Agosto');

    const novaData2 = formatMonth(dataMock2);
    expect(novaData2).toBe('Junho');
    expect([novaData, novaData2]).toMatchSnapshot();
  });

  test('Formata mês para número', () => {
    const mockMes1 = 'Janeiro';
    const mockMes2 = 'Fevereiro';
    const mockMes3 = 'Março';
    const mockMes4 = 'Abril';
    const mockMes5 = 'Maio';
    const mockMes6 = 'Junho';
    const mockMes7 = 'Julho';
    const mockMes8 = 'Agosto';
    const mockMes9 = 'Setembro';
    const mockMes10 = 'Outubro';
    const mockMes11 = 'Novembro';
    const mockMes12 = 'Dezembro';

    const numeroMes1 = formatMonthNumber(mockMes1);
    expect(numeroMes1).toBe(1);

    const numeroMes2 = formatMonthNumber(mockMes2);
    expect(numeroMes2).toBe(2);

    const numeroMes3 = formatMonthNumber(mockMes3);
    expect(numeroMes3).toBe(3);

    const numeroMes4 = formatMonthNumber(mockMes4);
    expect(numeroMes4).toBe(4);

    const numeroMes5 = formatMonthNumber(mockMes5);
    expect(numeroMes5).toBe(5);

    const numeroMes6 = formatMonthNumber(mockMes6);
    expect(numeroMes6).toBe(6);

    const numeroMes7 = formatMonthNumber(mockMes7);
    expect(numeroMes7).toBe(7);

    const numeroMes8 = formatMonthNumber(mockMes8);
    expect(numeroMes8).toBe(8);

    const numeroMes9 = formatMonthNumber(mockMes9);
    expect(numeroMes9).toBe(9);

    const numeroMes10 = formatMonthNumber(mockMes10);
    expect(numeroMes10).toBe(10);

    const numeroMes11 = formatMonthNumber(mockMes11);
    expect(numeroMes11).toBe(11);

    const numeroMes12 = formatMonthNumber(mockMes12);
    expect(numeroMes12).toBe(12);
    expect([
      numeroMes1,
      numeroMes2,
      numeroMes3,
      numeroMes4,
      numeroMes5,
      numeroMes6,
      numeroMes7,
      numeroMes8,
      numeroMes9,
      numeroMes10,
      numeroMes11,
      numeroMes12,
    ]).toMatchSnapshot();
  });
});
