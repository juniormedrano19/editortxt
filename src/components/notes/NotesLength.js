import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const NotesLength = () => {

    const {active} = useSelector( state => state.notes );
    const {body}=active;
    const bodyLength=body.length;


 





    return (
        <div className="notes__length">
        <div>Número de caracteres: {`${bodyLength}`}</div>
               
        </div>
    )
}
