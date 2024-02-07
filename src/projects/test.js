function calculateDaysBetweenDates(begin, end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const timeDifference = endDate.getTime() - beginDate.getTime();
  return Math.ceil(timeDifference / (1000 * 3600 * 24));
}

function square_a_circle_and_bang_your_mum