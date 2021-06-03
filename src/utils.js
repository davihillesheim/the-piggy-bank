export const monthYear = date => {
  const dateObj = new Date(date);
  const parsedDate = (dateObj.getMonth() + 1) + '/' + dateObj.getFullYear();
  return parsedDate;
}

export const dayMonthYear = date => {
  const dateObj = new Date(date);
  const parsedDate = dateObj.getDate() + '/' + (dateObj.getMonth() + 1) + '/' + dateObj.getFullYear();
  return parsedDate;
}

export const getLastDayOfMonth = date => new Date(date.getFullYear(), date.getMonth() + 1, 0);