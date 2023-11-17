import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { formatMonth, formatDate, formatMonthNumber } from '../../utils/data';
import { ordenationArrayData, groupBy } from '../../utils/ordenation';
import { SectionStyled } from './styles';
import { getSomeMovies } from '../../store/redux/actions';
import { useDispatch } from 'react-redux';
import { Box, CircularProgress } from '@mui/material';
const Section = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSomeMovies());
  }, [dispatch]);

  const moviesSection = useSelector((state) => state['movies']);

  const todaysDate = new Date();
  const monthDate = formatMonth(todaysDate);

  ordenationArrayData(moviesSection, ['release_date']);

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
    <SectionStyled>
      <div className="divSection">
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

              if (!filmValue.includes(monthDate) && filmValue.includes(String(new Date().getFullYear())) && monthCompare()) {
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
              margin: 50,
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
