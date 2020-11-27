import React, { useEffect }  from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDispatch, useSelector } from 'react-redux';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { startSaveNote,activeNote } from '../actions/notes';

export const Editor = () =>{
    const dispatch = useDispatch();
    const {active} = useSelector( state => state.notes);
    const {title, body} = active
    const bodyLength=body.length;

    const handleOnChange = (e,editor) => {
        const data = editor.getData()
         active.body = data
         dispatch(startSaveNote(active.id));
     }
  
  return (
            <CKEditor
                data = {body}
                editor = {ClassicEditor}
                onChange = {handleOnChange}
            />
  )
}

export default Editor;