import React from "react";
import { render } from "@testing-library/react";
import Coin from "./Coin";

// smoke test
it("renders without crashing", function () {
    render(<Coin result="heads" />);
    render(<Coin result="tails" />);
});

// snapshot test
it("matches heads snapshot", function () {
    const { asFragment } = render(<Coin result="heads" />);
    expect(asFragment()).toMatchSnapshot();
});

// snapshot test
it("matches tails snapshot", function () {
    const { asFragment } = render(<Coin result="tails" />);
    expect(asFragment()).toMatchSnapshot();
});
