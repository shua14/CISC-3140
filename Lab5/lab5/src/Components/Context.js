import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const Context = createContext({
    allCars : [],
    getAllCars: () => {}
});

export default function ContextKeeper(props) {
    const [allCars, setAllCars] = useState([]);

    const getAllCars = async () => {
        const res  = await axios.get('http://localhost:3000/getAll')
        setAllCars(res.data.results)
    }

    useEffect(() => {
        getAllCars()
    })

    return (
        <Context.Provider value={{
            allCars: allCars, 
            getAllCars: getAllCars
        }}>
            {props.children}
        </Context.Provider>
    )
}