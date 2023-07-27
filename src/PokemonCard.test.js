import { render } from '@testing-library/react';
import PokemonCard from './PokemonCard';


const props = {
    front: "front.png",
    back: "back.png",
    name: "Pokemon Name",
    stats: [
        {
            name: "stat-name1",
            value: "stat-value1"
        },
        {
            name: "stat-name2",
            value: "stat-value2"
        }
    ]
};


test("Renders without crashing", () => {
    render(<PokemonCard
        front={props.front}
        back={props.back}
        name={props.name}
        stats={props.stats}
    />);
});


test("Matches snapshot", () => {
    const {asFragment} = render(<PokemonCard
        front={props.front}
        back={props.back}
        name={props.name}
        stats={props.stats}
    />);

    expect(asFragment()).toMatchSnapshot();
});
