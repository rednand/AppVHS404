import { formatDate } from '../data';
import { groupBy, ordenationArrayData, randomMovies } from '../ordenation';

describe('Testando funções utils', () => {
  test('Ordena filmes por datas', () => {
    const dataMock = [
      {
        name: 'Barbarians ',
        release_date: '2022-04-01T03:00:00.000Z',
      },
      {
        name: 'So cold the river',
        release_date: '2022-03-25T00:00:00.000Z',
      },
      {
        name: 'Oferenda ao Demônio',
        release_date: '2023-02-09T00:00:00.000Z',
      },
      {
        name: 'Megatubarão 2',
        release_date: '2023-08-03T03:00:00.000Z',
      },
      {
        name: 'Summoning the Spirit',
        release_date: '2023-08-08T03:00:00.000Z',
      },
      {
        name: 'A Freira 2',
        release_date: '2023-09-07T00:00:00.000Z',
      },
      {
        name: 'A Última Viagem de Demeter',
        release_date: '2023-08-24T00:00:00.000Z',
      },
    ];

    const retorno = [
      {
        name: 'A Freira 2',
        release_date: '2023-09-07T00:00:00.000Z',
      },
      {
        name: 'A Última Viagem de Demeter',
        release_date: '2023-08-24T00:00:00.000Z',
      },
      {
        name: 'Summoning the Spirit',
        release_date: '2023-08-08T03:00:00.000Z',
      },
      {
        name: 'Megatubarão 2',
        release_date: '2023-08-03T03:00:00.000Z',
      },
      {
        name: 'Oferenda ao Demônio',
        release_date: '2023-02-09T00:00:00.000Z',
      },
      {
        name: 'Barbarians ',
        release_date: '2022-04-01T03:00:00.000Z',
      },
      {
        name: 'So cold the river',
        release_date: '2022-03-25T00:00:00.000Z',
      },
    ];

    const novaData = ordenationArrayData(dataMock, 'release_date');
    expect(novaData).toStrictEqual(retorno);
    expect(novaData).toMatchSnapshot();
  });

  test('Agrupa filmes', () => {
    const moviesSection = [
      {
        _id: '64cfe9bfa14b929c1e29e6db',
        genre: ['Terror'],
        name: 'A Freira 2',
        original_language: 'English',
        original_title: 'The num 2',
        release_date: '2023-09-07T00:00:00.000Z',
        trailer: 'QF-oyCwaArU',
        overview:
          'Em 1956, na França, um padre é assassinado e parece que um mal está se espalhando. Determinada a deter o maligno, irmã Irene mais uma vez fica cara a cara com uma força demoníaca.',
        poster: 'https://images2.imgbox.com/02/54/5yPAPSOh_o.jpeg',
        __v: 0,
      },
      {
        _id: '64e645afb318a0f058a0bed2',
        genre: ['vampiro'],
        name: 'A Última Viagem de Demeter',
        original_language: 'English',
        original_title: 'Dracula - The last voyage of the demeter',
        release_date: '2023-08-24T00:00:00.000Z',
        trailer: 'FwgF3-3LYsg',
        overview:
          'A presença profana de Drácula condena a tripulação do navio mercante Demeter.',
        poster:
          'https://dx35vtwkllhj9.cloudfront.net/universalstudios/the-last-voyage-of-the-demeter/images/regions/us/onesheet.jpg',
        __v: 0,
      },
      {
        _id: '64cfe708a14b929c1e29e6d0',
        genre: ['monstro'],
        name: 'Summoning the Spirit',
        original_language: 'English',
        original_title: 'Summoning the Spirit',
        release_date: '2023-08-08T03:00:00.000Z',
        trailer: '6D118asy-14',
        overview:
          'CONVOCANDO O ESPÍRITO segue Carla (Krystal Millie Valdes) e Dean (Ernesto Reyes, ',
        poster: 'https://images2.imgbox.com/d7/2b/dxT90c3v_o.jpg',
        __v: 0,
      },
      {
        _id: '64ca4a6bbdab9e384f7894c2',
        genre: ['ação', 'aventura', 'monstro'],
        name: 'Megatubarão 2',
        original_language: 'english',
        original_title: 'Meg 2',
        release_date: '2023-08-03T03:00:00.000Z',
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
        release_date: '2023-02-09T00:00:00.000Z',
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
        release_date: '2022-04-01T03:00:00.000Z',
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

    const ListMovieWithDataIdName = moviesSection.map((item, key) => {
      key = item['_id'];
      return {
        movie: item['name'],
        data: formatDate(item['release_date']),
        id: item['_id'],
        poster: item['poster'],
      };
    });

    const novoArray = {
      '07 de Setembro de 2023': [
        {
          movie: 'A Freira 2',
          data: '07 de Setembro de 2023',
          id: '64cfe9bfa14b929c1e29e6db',
          poster: 'https://images2.imgbox.com/02/54/5yPAPSOh_o.jpeg',
        },
      ],
      '24 de Agosto de 2023': [
        {
          movie: 'A Última Viagem de Demeter',
          data: '24 de Agosto de 2023',
          id: '64e645afb318a0f058a0bed2',
          poster:
            'https://dx35vtwkllhj9.cloudfront.net/universalstudios/the-last-voyage-of-the-demeter/images/regions/us/onesheet.jpg',
        },
      ],
      '08 de Agosto de 2023': [
        {
          movie: 'Summoning the Spirit',
          data: '08 de Agosto de 2023',
          id: '64cfe708a14b929c1e29e6d0',
          poster: 'https://images2.imgbox.com/d7/2b/dxT90c3v_o.jpg',
        },
      ],
      '03 de Agosto de 2023': [
        {
          movie: 'Megatubarão 2',
          data: '03 de Agosto de 2023',
          id: '64ca4a6bbdab9e384f7894c2',
          poster:
            'https://cinepop.com.br/wp-content/uploads/2023/05/megatubarao2_1.jpg',
        },
      ],
      '09 de Fevereiro de 2023': [
        {
          movie: 'Oferenda ao Demônio',
          data: '09 de Fevereiro de 2023',
          id: '63ef77742fc555602a81313c',
          poster:
            'https://www.atoupeira.com.br/wp-content/uploads/2023/01/oferenda-ao-demonio-poster.jpg',
        },
      ],
      '01 de Abril de 2022': [
        {
          movie: 'Barbarians ',
          data: '01 de Abril de 2022',
          id: '62449edee7b7631887de44b3',
          poster: 'https://images2.imgbox.com/4e/ae/LtK18ttr_o.jpg',
        },
      ],
      '25 de Março de 2022': [
        {
          movie: 'So cold the river',
          data: '25 de Março de 2022',
          id: '62333038ebe66ae54e6215fc',
          poster: 'https://images2.imgbox.com/0a/e7/UtveBbAE_o.jpg',
        },
      ],
    };

    const novaData = groupBy(ListMovieWithDataIdName, 'data');
    expect(novaData).toStrictEqual(novoArray);
    expect(novaData).toMatchSnapshot();
  });

  test('Randomiza filmes', () => {
    const movies = [
      {
        _id: '64cfe9bfa14b929c1e29e6db',
        genre: ['Terror'],
        name: 'A Freira 2',
        original_language: 'English',
        original_title: 'The num 2',
        release_date: '2023-09-07T00:00:00.000Z',
        trailer: 'QF-oyCwaArU',
        overview:
          'Em 1956, na França, um padre é assassinado e parece que um mal está se espalhando. Determinada a deter o maligno, irmã Irene mais uma vez fica cara a cara com uma força demoníaca.',
        poster: 'https://images2.imgbox.com/02/54/5yPAPSOh_o.jpeg',
        __v: 0,
      },
      {
        _id: '64e645afb318a0f058a0bed2',
        genre: ['vampiro'],
        name: 'A Última Viagem de Demeter',
        original_language: 'English',
        original_title: 'Dracula - The last voyage of the demeter',
        release_date: '2023-08-24T00:00:00.000Z',
        trailer: 'FwgF3-3LYsg',
        overview:
          'A presença profana de Drácula condena a tripulação do navio mercante Demeter.',
        poster:
          'https://dx35vtwkllhj9.cloudfront.net/universalstudios/the-last-voyage-of-the-demeter/images/regions/us/onesheet.jpg',
        __v: 0,
      },
      {
        _id: '64cfe708a14b929c1e29e6d0',
        genre: ['monstro'],
        name: 'Summoning the Spirit',
        original_language: 'English',
        original_title: 'Summoning the Spirit',
        release_date: '2023-08-08T03:00:00.000Z',
        trailer: '6D118asy-14',
        overview:
          'CONVOCANDO O ESPÍRITO segue Carla (Krystal Millie Valdes) e Dean (Ernesto Reyes, ',
        poster: 'https://images2.imgbox.com/d7/2b/dxT90c3v_o.jpg',
        __v: 0,
      },
      {
        _id: '64ca4a6bbdab9e384f7894c2',
        genre: ['ação', 'aventura', 'monstro'],
        name: 'Megatubarão 2',
        original_language: 'english',
        original_title: 'Meg 2',
        release_date: '2023-08-03T03:00:00.000Z',
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
        release_date: '2023-02-09T00:00:00.000Z',
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
        release_date: '2022-04-01T03:00:00.000Z',
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

    const retorno = [
      {
        _id: '64cfe708a14b929c1e29e6d0',
        genre: ['monstro'],
        name: 'Summoning the Spirit',
        original_language: 'English',
        original_title: 'Summoning the Spirit',
        release_date: '2023-08-08T03:00:00.000Z',
        trailer: '6D118asy-14',
        overview:
          'CONVOCANDO O ESPÍRITO segue Carla (Krystal Millie Valdes) e Dean (Ernesto Reyes, ',
        poster: 'https://images2.imgbox.com/d7/2b/dxT90c3v_o.jpg',
        __v: 0,
      },
      {
        _id: '64e645afb318a0f058a0bed2',
        genre: ['vampiro'],
        name: 'A Última Viagem de Demeter',
        original_language: 'English',
        original_title: 'Dracula - The last voyage of the demeter',
        release_date: '2023-08-24T00:00:00.000Z',
        trailer: 'FwgF3-3LYsg',
        overview:
          'A presença profana de Drácula condena a tripulação do navio mercante Demeter.',
        poster:
          'https://dx35vtwkllhj9.cloudfront.net/universalstudios/the-last-voyage-of-the-demeter/images/regions/us/onesheet.jpg',
        __v: 0,
      },

      {
        _id: '64ca4a6bbdab9e384f7894c2',
        genre: ['ação', 'aventura', 'monstro'],
        name: 'Megatubarão 2',
        original_language: 'english',
        original_title: 'Meg 2',
        release_date: '2023-08-03T03:00:00.000Z',
        trailer: 'vFy_ZbgSef0',
        overview:
          'A viagem de uma equipe de pesquisa exploratória do oceano se transforma em um verdadeiro caos quando uma operação de mineração maquiavélica ameaça sua missão e os força a entrar em uma batalha de alto risco pela sobrevivência. Enfrentando Mega Tubarões colossais e saqueadores ambientais implacáveis, nossos heróis devem ser mais rápidos, mais inteligentes e superar os predadores impiedosos em uma corrida pulsante contra o tempo.',
        poster:
          'https://cinepop.com.br/wp-content/uploads/2023/05/megatubarao2_1.jpg',
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
      {
        _id: '63ef77742fc555602a81313c',
        genre: ['terror'],
        name: 'Oferenda ao Demônio',
        original_language: 'english',
        original_title: 'The Offering',
        release_date: '2023-02-09T00:00:00.000Z',
        trailer: '4y0YCt4Ui3U',
        overview:
          'Após o desaparecimento de uma jovem judia, o filho de um agente funerário hassídico volta para casa com sua esposa grávida na esperança de se reconciliar com seu pai. Mal eles sabem que logo abaixo no necrotério da família, um antigo mal com planos sinistros para o feto se esconde dentro de um cadáver misterioso.',
        poster:
          'https://www.atoupeira.com.br/wp-content/uploads/2023/01/oferenda-ao-demonio-poster.jpg',
        __v: 0,
      },
      {
        _id: '64cfe9bfa14b929c1e29e6db',
        genre: ['Terror'],
        name: 'A Freira 2',
        original_language: 'English',
        original_title: 'The num 2',
        release_date: '2023-09-07T00:00:00.000Z',
        trailer: 'QF-oyCwaArU',
        overview:
          'Em 1956, na França, um padre é assassinado e parece que um mal está se espalhando. Determinada a deter o maligno, irmã Irene mais uma vez fica cara a cara com uma força demoníaca.',
        poster: 'https://images2.imgbox.com/02/54/5yPAPSOh_o.jpeg',
        __v: 0,
      },
      {
        _id: '62449edee7b7631887de44b3',
        name: 'Barbarians ',
        original_language: 'English',
        original_title: 'Barbarians',
        release_date: '2022-04-01T03:00:00.000Z',
        trailer: 'Yh2qS3dNSC4',
        overview:
          'Um jantar em uma casa de campo que reúne quatro amigos para uma festa de aniversário. Mas à medida que a noite avança, segredos emergem e eventos perturbadores começam a se desenrolar ao redor deles',
        genre: ['Suspense', 'Mistério'],
        poster: 'https://images2.imgbox.com/4e/ae/LtK18ttr_o.jpg',
        __v: 0,
      },
    ];

    const novaData = randomMovies(movies);
    expect(novaData[0]).not.toEqual(retorno[0]) ||
      expect(novaData[1]).not.toEqual(retorno[1]);
    expect(novaData).toHaveLength(7);
    expect(novaData).toMatchSnapshot();
    expect(retorno).toMatchSnapshot();
  });
});
