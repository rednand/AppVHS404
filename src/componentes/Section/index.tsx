import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { formatMonth, formatDate, formatMonthNumber } from '../../utils/data';
import {
  groupBy,
  ordenationArrayDataMajorToManor,
} from '../../utils/ordenation';
import { SectionStyled } from './styles';
import { getMovies, getAllMovies } from '../../store/redux/actions';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { CircularProgress } from '@material-ui/core';

const Section = ({ mobile = false }) => {
  const dispatch = useDispatch();
  const moviesSection = useSelector((state) => state['movies']);

  const { data, isLoading } = getMovies();

  useEffect(() => {
    if (!!data) {
      dispatch(getAllMovies(data));
    }
  }, [dispatch, data]);

  const todaysDate = new Date();
  const monthDate = formatMonth(todaysDate);

  ordenationArrayDataMajorToManor(moviesSection, ['release_date']);

  const ListMovieWithDataIdName = moviesSection.map((item, key) => {
    key = item['_id'];
    return {
      movie: item['name'],
      data: formatDate(item['release_date']),
      id: item['_id'],
      poster: item['poster'],
    };
  });

  const GroupedMoviesByData = groupBy(ListMovieWithDataIdName, 'data');

  return (
    <SectionStyled
      style={{
        width: mobile && '80%',
        marginLeft: mobile && '10%',
        paddingTop: mobile && '5%',
        paddingBottom: '5%',
      }}
    >
      <div>
        <h2 className="sectionH3">LANÇAMENTOS ANTERIORES</h2>
        {moviesSection.length > 0 ? (
          <>
            {Object.keys(GroupedMoviesByData).map((filmValue) => {
              const filmValuetoString = JSON.stringify(
                GroupedMoviesByData[filmValue],
              );
              const filmValuetoJson = JSON.parse(filmValuetoString);
              const filmValueMap = filmValuetoJson.map((item) => {
                return (
                  <a key={item.id} className="MovieLink" href={'/' + item?.id}>
                    {item['movie']}
                  </a>
                );
              });

              const actualMonth = formatMonthNumber(monthDate);
              const filmMonth = formatMonthNumber(
                filmValue
                  .replaceAll('de', '')
                  .replace(/[^a-zA-ZçÇ]/gi, ' ')
                  .replace(/ /g, ''),
              );

              const monthCompare = () => {
                if (
                  typeof actualMonth === 'number' &&
                  typeof filmMonth === 'number'
                ) {
                  if (actualMonth >= filmMonth) {
                    return true;
                  } else {
                    return null;
                  }
                }
              };

              if (
                !filmValue.includes(monthDate) &&
                filmValue.includes(String(new Date().getFullYear())) &&
                monthCompare()
              ) {
                return (
                  <div className="OldMovieList">
                    <>
                      <p className="OldMovieData">{filmValue}</p>
                      {filmValueMap}
                    </>
                  </div>
                );
              }
            })}
          </>
        ) : (
          <Box
            component="div"
            sx={{
              marginLeft: 5,
            }}
          >
            <CircularProgress color="secondary" thickness={10} size={90} />
          </Box>
        )}
      </div>
    </SectionStyled>
  );
};

export default Section;
