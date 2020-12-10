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
    const date=new Date().getDate();
    const month=new Date().getMonth();
    const year=new Date().getFullYear();
    const setMonth=()=>{
        switch (month) {
            case 0:
                return "ene" ;   
                case 1:
                return "feb" ;    
                case 2:
                return "mar" ;    
                case 3:
                return "abr" ;    
                case 4:
                return "may" ;    
                case 5:
                return "jun" ;    
                case 6:
                return "jul" ;    
                case 7:
                return "ago" ;    
                case 8:
                return "sep" ;    
                case 9:
                return "oct" ;    
                case 10:
                return "nov" ;    
                case 11:
                return "dic" ;           
        
        
            default:
                return "equivocado";
        }
    }


    return (
        <div className="journal__entries">
        <div className="journal__entries-title">
        <span className="journal__text-history">Historial</span>
        <span className="journal__text-history">{`${date}-${setMonth()}-${year}`}</span>
        </div>
        
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
