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



const handleInputChange=({target})=>{
    setValues({
        ...values,
        [target.name]:target.value // target.name= name : value , para email sería target.name=email :value
    })
}

const handleEditorChange=({target})=>{
    setValues({
        ...values,
        body:target.value,
    })
}


return [values, handleInputChange,handleEditorChange, reset];
}
