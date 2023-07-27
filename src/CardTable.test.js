import { render } from '@testing-library/react';
import CardTable from './CardTable';


test("Renders without crashing", () => {
    render(<CardTable />);
});


test("Matches snapshot", () => {
    const {asFragment} = render(<CardTable />);
    expect(asFragment()).toMatchSnapshot();
});
