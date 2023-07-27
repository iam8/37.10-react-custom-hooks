import { render } from '@testing-library/react';
import PokeDex from './PokeDex';


test("Renders without crashing", () => {
    render(<PokeDex />);
});


test("Matches snapshot", () => {
    const {asFragment} = render(<PokeDex />);
    expect(asFragment()).toMatchSnapshot();
});
