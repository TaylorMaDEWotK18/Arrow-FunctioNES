// const getRandomNumber = (upper) => {
//   const randomNumber = Math.floor( Math.random() * upper ) + 1;
//   return randomNumber;
// };

// const getArea = (width, length, unit) => {
//     const area = width * length;
//     return `${area} ${unit}`;
// };

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

function getArea(width, length, height) {
  const area = width * length;
  return `${area} ${height}`;
} 

// Rewrite as Arrow Function ('arrow up')

const getArea = (width, length, height) => {
  const area = width * length;
  return `${area} ${height}`;
}

