import { useState } from "react";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

export const useForm = ( initialState = {} ) => {
  
const [ values, setValues ] = useState(initialState)
/* const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  ); */

const reset=( newFormState = initialState )=>{
    setValues(newFormState);
}

const editor=(value = initialState) =>{
    setValues(value)
}

const handleInputChange=({target})=>{
    setValues({
        ...values,
        [target.name]:target.value // target.name= name : value , para email sería target.name=email :value
    })
}

return [values, handleInputChange, reset,editor];
}
