


export default function generateNumsForGame(min, max, count) {
  let numbers = [];
  // const { min, max, count } = props;

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i < count; i++) {
    let newNum = getRandomIntInclusive(min, max);
    if (!numbers.includes(newNum)) { numbers.push(newNum) }
  }



  console.log(min)
  console.log(max)
  console.log(count)
  console.log(numbers)
  return (numbers)

};
