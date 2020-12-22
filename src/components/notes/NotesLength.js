import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const NotesLength = () => {

    const {active} = useSelector( state => state.notes );
    const {body}=active;
    /* console.log("contador body")
    console.log (body);
    const bodyLength=body.length; */
    const extractContent=(s)=> {
        var span = document.createElement('span');
        span.innerHTML = s;
        return span.textContent || span.innerText;
    };
    let longitud=extractContent(body).length;
      
          
      /* console.log(extractContent(body)); */

    return (
        <div className="notes__length">
        <div>Número de caracteres: {`${longitud}`}</div>
               
        </div>
    )
}
