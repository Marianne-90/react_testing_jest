import { describe, expect, it } from "vitest";
import { fizzbuzz } from "../fizzbuzz";


describe("fizzbuzz", () => {
  //*! lo comenté porque es redundante
  //   it("should be a function", () => {
  //     expect(typeof fizzbuzz).toBe("function");
  //   });

  it("Should throw if not number is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow(); //*! esta cosa evalua que se lanza un error
  });

  it("should throw an specific error message if not number is provided as a parameter", () => {
    expect(() => fizzbuzz()).toThrow("number must be number");
  });

  it("should throw an specific error message if not number is provided", () => {
    expect(() => fizzbuzz(NaN)).toThrow("number must be number"); //*! la función anónima solo es cuando es to throw
  });

  it("Should return 1 if number provided is 1", () => {
    expect(fizzbuzz(1)).toBe(1);
  });

  it("Should return 2 if number provided is 2", () => {
    expect(fizzbuzz(2)).toBe(2);
  });

  it("Should return fizz if number provided is 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });

  it("Should return fizz if number provided is multiple of 3 and not  5", () => {
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(9)).toBe("fizz");
    expect(fizzbuzz(12)).toBe("fizz");
    // expect(fizzbuzz(15)).toBe("fizz"); //*! multiplo de 5
  });
  //*! lo comenté porque este test ya está cubierto o sea hasta este punto sale verde
  //   it("Should return 4 if number provided is 4", () => {
  //     expect(fizzbuzz(4)).toBe(4);
  //   })

  it("Should return buzz if number provided is multiple of 5 and not multiple of 3", () => {
    expect(fizzbuzz(5)).toBe("buzz");
    expect(fizzbuzz(10)).toBe("buzz");
    // expect(fizzbuzz(15)).toBe("buzz"); //*! multiplo de 3
    expect(fizzbuzz(20)).toBe("buzz");
  });


  it("Should return fizzbuzz if number provided is multiple of 15", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
    expect(fizzbuzz(30)).toBe("fizzbuzz");
    expect(fizzbuzz(45)).toBe("fizzbuzz");
  });
});
