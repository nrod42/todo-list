const formatCurrentDate = () => {
  const currentDate = new Date();
  const dd = String(currentDate.getDate()).padStart(2, '0');
  const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
  const yyyy = currentDate.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
};

export default formatCurrentDate;
