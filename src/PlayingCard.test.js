import { render } from '@testing-library/react';
import PlayingCard from './PlayingCard';


test("Renders without crashing", () => {
    render(<PlayingCard front="front.png" back="back.png" />);
});


test("Matches snapshot", () => {
    const {asFragment} = render(<PlayingCard front="front.png" back="back.png" />);
    expect(asFragment()).toMatchSnapshot();
});
