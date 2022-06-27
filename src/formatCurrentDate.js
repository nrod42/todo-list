const formatDate = (date) => {
  if (date === '') return;
  const splitDate = date.split('-');
  const dd = splitDate[2];
  const mm = splitDate[1];
  const yyyy = splitDate[0];
  return `${mm}/${dd}/${yyyy}`;
};

export default formatDate;
