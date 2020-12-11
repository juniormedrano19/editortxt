import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {
/*     const entries=[1]; */
const [huawei, sethuawei] = useState({})


    useEffect(() => {
      fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=599V8N2RDZWH&format=json&by=position&lat=-9.189967&lng=-75.015152`)
      .then(res => res.json())
      .then(data => sethuawei( data ));
    }, [])

/* console.log(huawei); */

const toTimestamp=(strDate)=>{
    let datum = Date.parse(strDate);
    return datum/1000;
 }
let d=toTimestamp(huawei.formatted);
let date = new Date(d * 1000);
let month=date.getMonth();
let day=date.getDate();
let year=date.getFullYear();

const {notes} = useSelector( state => state.notes);
/* console.log(notes); */
/* 
key={value.id} 
                    {...value} */
  /*   const date=new Date().getDate();
    const month=new Date().getMonth(); */
    /* const year=new Date().getFullYear(); */
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
        <span className="journal__text-history">{`${day}-${setMonth()}-${year}`}</span>
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
