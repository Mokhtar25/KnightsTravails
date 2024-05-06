export default function HashMap() {
  let slots = new Array(16);

  let index = 0;

  const add = (value) => {
    slots[index] = value;
    index++;
  };

  const array = () => {
    return slots;
  };

  return { array, slots, index, add };
}

console.log("test");
