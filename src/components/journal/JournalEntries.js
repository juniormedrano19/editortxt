import React from 'react'
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {
    const entries=[1]
    return (
        <div className="journal__entries">
        <span className="journal__text-history">Historial</span>
            {
                entries.map((value)=>(
                    <JournalEntry key={value} value={value}/>
                ))

            }
        </div>
    )
}
