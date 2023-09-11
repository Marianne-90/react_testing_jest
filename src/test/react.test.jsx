import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { describe, expect, it, afterEach } from "vitest";
import { Calculator, OPERATIONS, NUMBERS } from "../Calculatos";



describe("calculator", () => {
  afterEach(cleanup); //*? esto es para que no se renderice acumulativamente si no que se limpie y renderice solo una vez cada it

  it("should be render", () => {
    render(<Calculator />);
  });

  it("Shold render title correctly", () => {
    render(<Calculator />);
    //*? va a buscar que exista el texto calulator
    screen.getByText("Calculator");
  });

  it("Should render numbers", () => {
    render(<Calculator />);

    NUMBERS.forEach((number) => {
      screen.getByText(number);
    });
  });

  it("Should render 4 rows", () => {
    render(<Calculator />);

    const rows = screen.getAllByRole("row");

    expect(rows).toHaveLength(4);
  });

  it("Should render operations", () => {
    render(<Calculator />);
    OPERATIONS.forEach((op) => {
      screen.getByText(op);
    });
  });

  it("Should render equal sign", () => {
    render(<Calculator />);
    screen.getByText("=");
  });

  it("Should render an input", () => {
    render(<Calculator />);
    screen.getByRole("textbox"); //*! todos los input por defecto tienen valor de texbox
  });

  it("Should user input after clicking a number", () => {
    render(<Calculator />);

    const one = screen.getByText(1);
    fireEvent.click(one);

    const input = screen.getByRole("textbox");

    expect(input.value).toBe("1");
  });

  it("Should user input after clicking several numbers", () => {
    render(<Calculator />);

    const one = screen.getByText(1);
    fireEvent.click(one);

    const two = screen.getByText(2);
    fireEvent.click(two);

    const three = screen.getByText(3);
    fireEvent.click(three);

    const input = screen.getByRole("textbox");

    expect(input.value).toBe("123");
  });

  it("Should user input after clicking several numbers and operations", () => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);

    const plus = screen.getByText("+");
    fireEvent.click(plus);
    fireEvent.click(one);

    const input = screen.getByRole("textbox");

    expect(input.value).toBe("1+1");
  });

  it("Should calculate based in user input", () => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);

    const plus = screen.getByText("+");
    fireEvent.click(plus);
    fireEvent.click(one);

    const equal = screen.getByText("=");
    fireEvent.click(equal);

    const input = screen.getByRole("textbox");

    expect(input.value).toBe("2");
  });
});
