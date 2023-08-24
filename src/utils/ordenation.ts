export const ordenationArrayData = (array, index) => {
  array?.sort((menor, maior) =>
    menor[index] > maior[index] ? -1 : menor[index] > maior[index] ? 1 : 0,
  );
};

export const groupBy = (movies, key) => {
  return movies.reduce(function (index, item) {
    (index[item[key]] = index[item[key]] || []).push(item);
    return index;
  }, {});
};

export const randomMovies = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
