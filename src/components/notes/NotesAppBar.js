import React from 'react'

export const NotesAppBar = () => {
    const date=new Date().getDate();
    return (
        <div className="notes__appbar">
            <span>{date} de noviembre 2020</span>

            <div>
               {/*  <button className="btn" >
                        Picture
                </button> */}
                <button className="btn">
                    Adjuntar txt
                </button>
            </div>
        </div>
    )
}
