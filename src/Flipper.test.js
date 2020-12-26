import React from "react";
import { render, fireEvent, queryByAltText } from "@testing-library/react";
import Flipper from "./Flipper";

beforeEach(function () {
    jest.spyOn(Math, "random")
        .mockReturnValueOnce(0.25)
        .mockReturnValueOnce(0.75);
});

// smoke test
it("renders without crashing", function () {
    render(<Flipper />);
});

// snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<Flipper />);
    expect(asFragment()).toMatchSnapshot();
});

it("does not show coin image on initial page load", function () {
    const { queryByAltText } = render(<Flipper />);
    expect(queryByAltText('heads')).not.toBeInTheDocument();
    expect(queryByAltText('tails')).not.toBeInTheDocument();
});

it("renders correct image for heads or tails result", function () {
    const { queryByAltText, queryByTestId } = render(<Flipper />);
    const flipButton = queryByTestId('flip-button');
    fireEvent.click(flipButton);
    expect(queryByAltText('heads')).toBeInTheDocument();
    expect(queryByAltText('tails')).not.toBeInTheDocument();
    fireEvent.click(flipButton);
    expect(queryByAltText('heads')).not.toBeInTheDocument();
    expect(queryByAltText('tails')).toBeInTheDocument();
});

it("updates flip count and result counts correctly", function () {
    const { queryByText, queryByTestId } = render(<Flipper />);
    const flipButton = queryByTestId('flip-button');
    fireEvent.click(flipButton);
    expect(queryByText('Out of 1 flips, there have been 1 heads and 0 tails.')).toBeInTheDocument();
    fireEvent.click(flipButton);
    expect(queryByText('Out of 2 flips, there have been 1 heads and 1 tails.')).toBeInTheDocument();
});

afterEach(function () {
    Math.random.mockRestore();
});
