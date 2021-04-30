import { TYPES_COLORS_MAP } from "../data/TypesColors";

// input: digit between 1-999
// output: padded number with preceeding zero's to 3 digits
// example: '9' --> '009'
export function padZero(n) {
  const newN = n < 10 ? `00${n}` : n < 100 ? `0${n}` : n;
  return newN;
}

// input: lowercase string
// output: capitalized string
// example: 'water' --> 'Water'
export function cap(p) {
  return p[0].toUpperCase() + p.slice(1);
}

// input: min and max id number of pokemon
// output: random digit between min and max
// example: random(1,151) --> 54
export function randomNums(min, max) {
  return Math.floor(Math.random() * max + min);
}

// input: type name
// output: mapped type color
// example: typeMapper('water') --> #3f3fe2
export function typeMapper(typeName) {
  if (typeName) {
    try {
      let color = TYPES_COLORS_MAP.filter(
        (t) => t.type === typeName.type.name
      )[0].color;
      return color;
    } catch {
      return "#000";
    }
  }
}
