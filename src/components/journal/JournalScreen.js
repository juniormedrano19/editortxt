import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {
//selecciono del estado el active de la nota
    const {active} = useSelector( state => state.notes );
/*     console.log(active); */

    return (
        <div className="journal__main-content">
            <Sidebar />

            <main>
                {
                //Si active tiene algun doc muestra sino se pone en página de inicio
                    (active)?<NoteScreen />: <NothingSelected />
                }
                {/* <NothingSelected /> */}
                {/*   <NoteScreen /> */}
            </main>
        </div>
    )
}
