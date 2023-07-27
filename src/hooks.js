import React, {useState} from "react";


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
