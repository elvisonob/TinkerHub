import dayjs from 'dayjs';

function MemoLearning() {
  const today = dayjs().add(7, 'day').format('YYYY-MM-DD');

  return <h1>{today}</h1>;
}

export default MemoLearning;
