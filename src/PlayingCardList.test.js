import { render } from '@testing-library/react';
import PlayingCardList from "./PlayingCardList";


test("Renders without crashing", () => {
    render(<PlayingCardList />);
});


test("Matches snapshot", () => {
    const {asFragment} = render(<PlayingCardList />);
    expect(asFragment()).toMatchSnapshot();
});
