import React, { useState, useEffect } from 'react';
import Table from './Table';
import { useStateIfMounted } from 'use-state-if-mounted';
import axios from 'axios';

export default function ViewAllCars() {
    
    const [json, setJson] = useState([{}]);

    useEffect(() => {
        const getCars = async () => {
            await axios.get('http://localhost:3000/getAll').then(res => {
                setJson(res)
            }
        )}

        getCars()
    }, [])

    console.log(json);



    return (
        <>
            <Table data={JSON.parse(json)}/>
        </>
    )
}