export const fizzbuzz = (number) => {
  if (typeof number !== "number") throw new Error("number must be number");
  if (Number.isNaN(number)) throw new Error("number must be number");

  //   if (number % 15 === 0) return "fizzbuzz";
  //   if (number % 3 === 0) return "fizz";
  //   if (number % 5 === 0) return "buzz";

  const MULTIPLIES = {
    3: "fizz",
    5: "buzz",
  };
  let output = "";
  let arrayMULT = Object.entries(MULTIPLIES).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) {
      output = output + word;
    }
  });

return output === "" ? number : output;
};
