const closestToZero = (input) => {
  if (input === undefined || input.length === 0) return 0;

  let closest;
  input.forEach((number) => {
    if (
      closest === undefined ||
      Math.abs(closest) > Math.abs(number) ||
      (Math.abs(closest) === Math.abs(number) && closest < number)
    )
      closest = number;
  });
  return closest;
};

export default closestToZero;
