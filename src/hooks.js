import {useState} from "react";



/**
 * Custom hook - toggle a state (true -> false, false -> true).
 */
function useFlip() {
    const [state, setState] = useState(true);
    const flipState = () => {
        setState(state => !state);
    }

    return [state, flipState];
}


function useAxios() {

}


export {useFlip, useAxios};
