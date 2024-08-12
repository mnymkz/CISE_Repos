import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

// it("renders without crashing", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<App />, div);
//     ReactDOM.unmountComponentAtNode(div);
// });

test("renders without crashing", () => {
    const { getByText } = render(<App />);
    const countElement = getByText(/Count:/i);
    expect(countElement).toBeInTheDocument();
});

describe("Addition", () => {
    it("knows that 2 and 2 make 4", () => {
        expect(2 + 2).toBe(4);
    });
});
