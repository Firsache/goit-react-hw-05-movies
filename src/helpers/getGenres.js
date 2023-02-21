export const getGenres = array => {
  return array.map(el => el.name).join(', ');
};
