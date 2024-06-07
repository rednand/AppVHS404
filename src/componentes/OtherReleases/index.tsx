import { formatMonth, formatDate, formatMonthNumber } from '../../utils/data';
import { NextReleases } from './styles';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { CircularProgress } from '@material-ui/core';
import useWindowWidth from '../../utils/windowWidth';

const OtherReleases = () => {
  const movies = useSelector((state) => state['movies']);

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
    .filter((item) => !!item);

  ListMovieWithDataIdName.length = 6;

  const windowWidth = useWindowWidth();

  return (
    <NextReleases
      style={{
        marginTop: windowWidth < 700 && '20%',
        padding: windowWidth < 700 && '10%',
        width: windowWidth < 700 && '100%',
        margin: windowWidth < 700 && '0%',
      }}
    >
      <h3>Lançamentos futuros</h3>
      <div className="allMoviesDiv">
        {ListMovieWithDataIdName?.length > 0 ? (
          <>
            {ListMovieWithDataIdName.map((film) => {
              return (
                <div className="soon" key={film.id}>
                  <a href={`/${film.id}`}>
                    <h2 className="nameSoon"> {film.movie}</h2>
                    <div className="soonPoster222">
                      <div
                        style={{
                          backgroundImage: `url(${film.poster})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          width: 150,
                          height: 220,
                        }}
                      ></div>
                    </div>
                  </a>
                  <p className="soonDataOtherReleases"> {film.data}</p>
                </div>
              );
            })}
          </>
        ) : (
          <Box
            component="div"
            sx={{
              margin: 10,
            }}
          >
            <CircularProgress color="secondary" thickness={10} size={90} />
          </Box>
        )}
      </div>
    </NextReleases>
  );
};

export default OtherReleases;
