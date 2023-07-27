import { render } from '@testing-library/react';
import PokemonSelect from './PokemonSelect';


const testAdd = () => {
    return;
}


test("Renders without crashing", () => {
    render(<PokemonSelect add={testAdd} />);
});


test("Matches snapshot", () => {
    const {asFragment} = render(<PokemonSelect add={testAdd}/>);
    expect(asFragment()).toMatchSnapshot();
});
