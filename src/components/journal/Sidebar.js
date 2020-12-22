import React, {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries';
import addFile from '../../styles/img/addFile.svg'           



export const Sidebar = () => {
   
    const [huawei, sethuawei] = useState({})


    useEffect(() => {
      fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=599V8N2RDZWH&format=json&by=position&lat=-9.189967&lng=-75.015152`)
      .then(res => res.json())
      .then(data => sethuawei( data ));
    }, [])

/* console.log(huawei); */

const toTimestamp=(strDate)=>{
    var datum = Date.parse(strDate);
    return datum/1000;
 }
let d=toTimestamp(huawei.formatted)
//NB: use + before variable name
/* var date = new Date(+d);

console.log(d);
console.log(date.toDateString());
console.log(date.getFullYear());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getHours());
console.log(date.toLocaleTimeString()); */
/* var timestamp = 1439329773; */ // replace your timestamp
let date = new Date(d * 1000);
/* console.log(date.getHours()); */
let hora=date.getHours();
/* console.log(date.getDate()); */
/* var formattedDate = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
console.log(formattedDate); */

 
    //NB: use + before variable name

    
/* const daySplit=dayPrueba.split("-");
const day1=daySplit[2] 
const day2=day1.split(":");
const day3=day2[0]
const day4=day3.split(" ");
const hora1=day4[1]
const hora=parseInt(hora1); */


/* const splitPrueba=()=>{
    const dayPrueba=huawei.formatted;
    let daysplit=dayPrueba.split(" ");
    let day1=daysplit[1]
    let day2=day1.split(":");
    let day3=day2[0];
    return day3;
}
 */

  




   /*  const hora=new Date().getHours(); */

    const dispatch = useDispatch();
    const {name} = useSelector( state => state.auth );
/*     const date=new Date().getDate(); */
   /*  const month=new Date().getMonth(); */
    const year=new Date().getFullYear();

/* const setMonth=()=>{
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
 */

 /*    console.log(state); */

    const handleLogout=()=>{
/* console.log(`click`); */
dispatch(startLogout());
    }

    const handleAdd=()=>{
        dispatch(startNewNote());
    }
    


    return (
       <aside className="journal__sidebar">
           <div className="journal__sidebar-navbar">
           <h3>
           {
                (hora<18)?(<i className="fas fa-sun"></i>):(<i className="fas fa-moon"></i>)


           }
                
               <span> {name}</span>
           </h3>
        {/*    <span>{`${date}-${setMonth()}-${year}`}</span> */}
           <button 
           className="btn1"
           onClick={handleLogout}
           >
               Cerrar Sesión
           </button>

           </div>
           <div 
           className="journal__new-entry"
           onClick={handleAdd}
           >
      
        
        <img src={addFile} alt=""

            style={{width:80}}
        />
       
           <p className="mt-5">
               Crear documento
             
           </p>

           </div>
           <JournalEntries />
       </aside>
    )
}
