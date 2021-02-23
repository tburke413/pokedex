export default function padZero(n) {
  const newN = n < 10 ? `00${n}` : n < 100 ? `0${n}` : n;
  return newN;
}
