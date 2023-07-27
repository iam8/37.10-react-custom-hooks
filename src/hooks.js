import {useState} from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";


/**
 * Toggle the 'isFacingUp' state of a card (true -> false, false -> true).
 *
 * Returns:
 * - Array of 2 elements: isFacingUp state (initially true), and a function to toggle this state.
 */
function useFlip() {
    const [isFacingUp, setIsFacingUp] = useState(true);

    const flipisFacingUp = () => {
        setIsFacingUp(state => !state);
    }

    return [isFacingUp, flipisFacingUp];
}


/**
 * Make an Axios GET request to the API at the given base URL and add the response data object to
 * an array in state. The final portion of the URL must be provided as an argument to the returned
 * state-setter function.
 *
 * Generate and add a new unique ID with each new response data object.
 *
 * Pop up an alert and add nothing to array if error occurs on Axios request.
 *
 * Returns:
 * - Array of 2 elements: responses in state (initially empty array), and a function to make Axios * request and add the retrieved response data to the responses array.
 */
function useAxios(baseUrl) {
    const [responses, setResponses] = useState([]);

    const addResponseData = async (restOfUrl="") => {
        let result;
        try {
            result = await axios.get(`${baseUrl}${restOfUrl}`);
        } catch(err) {
            alert(err);
            return;
        }

        setResponses(array => [...array, {...result.data, id: uuid()}]);
    }

    return [responses, addResponseData];
}


export {useFlip, useAxios};
