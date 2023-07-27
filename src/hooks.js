import {useState} from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";


/**
 * Toggle a state (true -> false, false -> true).
 *
 * Returns:
 * - Array of 2 elements: state (initially true), and a function to toggle this state.
 */
function useFlip() {
    const [state, setState] = useState(true);

    const flipState = () => {
        setState(state => !state);
    }

    return [state, flipState];
}


/**
 * Make an Axios GET request to the given URL and add the response data object to an array in
 * state.
 *
 * Generate and add a new unique ID with each new response data object.
 *
 * Pop up an alert and add nothing to array if error occurs on Axios request.
 *
 * Returns:
 * - Array of 2 elements: state (initially empty array), and a function to make Axios request and
 *      add the response data to the state array.
 */
function useAxios(url) {
    const [array, setArray] = useState([]);

    const setDataArray = async (restOfUrl) => {
        let result;
        try {
            result = await axios.get(`${url}${restOfUrl}`);
        } catch(err) {
            alert(err);
            return;
        }

        setArray(array => [...array, {...result.data, id: uuid()}]);
    }

    return [array, setDataArray];
}


export {useFlip, useAxios};
