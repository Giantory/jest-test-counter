import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

let numInicial = 0;
describe("render initial number", () => {
  it("should be 0", () => {
    render(<App />);
    screen.getByText(numInicial);
  });
});
describe("modify correctly the number", () => {
  it("should add by 1", () => {
    render(<App />)
    const addBtn = screen.getByText("+");
    fireEvent.click(addBtn);
    numInicial+=1; // 0+1
    console.log(numInicial) //output : 1
    screen.getByText(numInicial) // buscando 1
  });
  it("should reduce by 1", () => {
    render(<App />);
    numInicial=0
    const rdcBtn = screen.getByText("-");
    fireEvent.click(rdcBtn);
    numInicial-=1; // 0-1
    console.log(numInicial) //output : -1
    screen.getByText(numInicial) // buscando -1
  });
  it("should reset to 0", () => {
    render(<App />);
    numInicial=0
    const resetBtn = screen.getByText("Reset");
    fireEvent.click(resetBtn);
    numInicial=0; // 0
    console.log(numInicial) //output : 0
    screen.getByText(numInicial) // buscando 0
  });
 
});

