import React, {useState} from 'react'


export default function Pets( {activeItemName, updateActiveItem} ) {

    const styles = {
        flexGrow: 1,
        cursor: 'pointer'
    }

    const activeItemStyle = {
        flexGrow: 1,
        backgroundColor: 'gray',
        color: 'white',
        cursor: 'pointer'
    }


    return (
        <div style={{  display: 'flex', justifyContent: 'space-evenly' }}>
            <div 
                style ={activeItemName == 'Rodent' ? activeItemStyle : styles}
                onClick={() => updateActiveItem('Rodent')}
            >Jyrsijät</div>
            <div 
                style={activeItemName == 'Reptile' ? activeItemStyle : styles}
                onClick={() => updateActiveItem('Reptile')}
            >Matelija</div>
            <div 
                style={activeItemName == 'Fish' ? activeItemStyle : styles}
                onClick={() => updateActiveItem('Fish')}
            >Kalat</div>
        </div>
    )
}
