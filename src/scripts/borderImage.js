const getRandomBox = (arr) => {
  if (arr.length === 0) return;
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
const boxes = [
  "/borderBox1.webp",
  "/borderBox2.webp",
  "/borderBox3.webp",
  "/borderBox4.webp",
];

const listCards = document.querySelectorAll('.list-card');
listCards.forEach(card => {
  card.style.border = '.7rem solid transparent';
  card.style.borderImage = `url(${getRandomBox(boxes)}) 20 fill`;
  card.style.WebkitBorderImage = `url(${getRandomBox(boxes)}) 85 fill`;
  card.style.OBorderImage = `url(${getRandomBox(boxes)}) 20 fill`;
  card.style.borderImageSlice = '90 fill';
});
