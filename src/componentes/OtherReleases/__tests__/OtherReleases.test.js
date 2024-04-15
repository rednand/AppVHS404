import {
  formatDate,
  formatMonth,
  formatMonthNumber,
} from './../../../utils/data';

test('Filtro de lançamentos novos', () => {
  const movies = [
    {
      _id: '64ca4a6bbdab9e384f7894c2',
      genre: ['ação', 'aventura', 'monstro'],
      name: 'Megatubarão 2',
      original_language: 'english',
      original_title: 'Meg 2',
      release_date: '2024-08-03T03:00:00.000Z',
      trailer: 'vFy_ZbgSef0',
      overview:
        'A viagem de uma equipe de pesquisa exploratória do oceano se transforma em um verdadeiro caos quando uma operação de mineração maquiavélica ameaça sua missão e os força a entrar em uma batalha de alto risco pela sobrevivência. Enfrentando Mega Tubarões colossais e saqueadores ambientais implacáveis, nossos heróis devem ser mais rápidos, mais inteligentes e superar os predadores impiedosos em uma corrida pulsante contra o tempo.',
      poster:
        'https://cinepop.com.br/wp-content/uploads/2023/05/megatubarao2_1.jpg',
      __v: 0,
    },
    {
      _id: '63ef77742fc555602a81313c',
      genre: ['terror'],
      name: 'Oferenda ao Demônio',
      original_language: 'english',
      original_title: 'The Offering',
      release_date: '2024-02-09T00:00:00.000Z',
      trailer: '4y0YCt4Ui3U',
      overview:
        'Após o desaparecimento de uma jovem judia, o filho de um agente funerário hassídico volta para casa com sua esposa grávida na esperança de se reconciliar com seu pai. Mal eles sabem que logo abaixo no necrotério da família, um antigo mal com planos sinistros para o feto se esconde dentro de um cadáver misterioso.',
      poster:
        'https://www.atoupeira.com.br/wp-content/uploads/2023/01/oferenda-ao-demonio-poster.jpg',
      __v: 0,
    },
    {
      _id: '62449edee7b7631887de44b3',
      name: 'Barbarians ',
      original_language: 'English',
      original_title: 'Barbarians',
      release_date: '2024-04-01T03:00:00.000Z',
      trailer: 'Yh2qS3dNSC4',
      overview:
        'Um jantar em uma casa de campo que reúne quatro amigos para uma festa de aniversário. Mas à medida que a noite avança, segredos emergem e eventos perturbadores começam a se desenrolar ao redor deles',
      genre: ['Suspense', 'Mistério'],
      poster: 'https://images2.imgbox.com/4e/ae/LtK18ttr_o.jpg',
      __v: 0,
    },
    {
      _id: '62333038ebe66ae54e6215fc',
      name: 'So cold the river',
      original_language: 'english',
      original_title: 'So cold the river',
      overview:
        'A pesquisa de um documentarista sobre o misterioso benfeitor de uma cidade revela um mal inexplicável enquanto está hospedado em um resort local',
      trailer: 'XQzilDUfWmk',
      poster: 'https://images2.imgbox.com/0a/e7/UtveBbAE_o.jpg',
      genre: ['Sobrenatural', 'Thriller', 'Mistério'],
      __v: 0,
      release_date: '2022-03-25T00:00:00.000Z',
    },
  ];

  const todaysDate = new Date();
  const monthDate = formatMonth(todaysDate);

  const ListMovieWithDataIdName = movies
    .map((item) => {
      const itemData = formatDate(item['release_date']);
      const actualMonth = formatMonthNumber(monthDate);
      const actualYear = new Date().getFullYear().toString();
      const filmMonth = formatMonthNumber(
        itemData
          .replace(/de/g, '')
          .replace(/[^a-zA-ZçÇ]/gi, ' ')
          .replace(/ /g, ''),
      );

      const monthCompareData = () => {
        if (actualMonth < filmMonth && itemData.slice(-4) >= actualYear) {
          return true;
        }
      };

      if (monthCompareData()) {
        return {
          movie: item['name'],
          data: formatDate(item['release_date']),
          id: item['_id'],
          poster: item['poster'],
        };
      }
    })
    .filter((item) => {
      return item != undefined;
    });

  const retornoFiltro = [
    {
      movie: 'Megatubarão 2',
      data: '03 de Agosto de 2024',
      id: '64ca4a6bbdab9e384f7894c2',
      poster:
        'https://cinepop.com.br/wp-content/uploads/2023/05/megatubarao2_1.jpg',
    },
  ];

  expect(ListMovieWithDataIdName).toEqual(retornoFiltro);
  expect(ListMovieWithDataIdName).toMatchSnapshot();
});
