import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {
/*     const entries=[1]; */

const {notes} = useSelector( state => state.notes);
/* console.log(notes); */
/* 
key={value.id} 
                    {...value} */

    return (
        <div className="journal__entries">
        <span className="journal__text-history">Historial</span>
            {
                notes.map((value,i)=>(
                    <JournalEntry 
                    key={value.id} 
                    indice={i}
                 {...value}
                    />
                ))

            }
        </div>
    )
}
