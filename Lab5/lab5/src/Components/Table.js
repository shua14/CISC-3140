import { useState } from 'react'

export default function Table(props) {
    const getKeys = () => {
        return Object.keys(props.data[0]);
    }

    const getHeader = () => {
        var keys = getKeys();
        
        return keys.map((key, index)=>{
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }

    const getRowsData = () => {
        var items = props.data;
        var keys = getKeys();
        return items.map((row, index)=>{
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
    }

    const RenderRow = (props) => {
        return props.keys.map((key, index)=>{
            return <td key={props.data[key]}>{props.data[key]}</td>
        })
    }
    
    return (
        <>
            <table>
                <thead>
                    <tr>{getHeader()}</tr>
                </thead>
                <tbody>
                    {getRowsData()}
                </tbody>
            </table>
        </>
    )
    
}