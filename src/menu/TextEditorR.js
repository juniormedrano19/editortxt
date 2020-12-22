import React, { useState , useRef , useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../actions/notes';
import ReactQuill from "react-quill";
import EditorToolBar, { modules, formats } from "./EditorToolBar";
import "react-quill/dist/quill.snow.css";
import '../styles/EditorStyles.css';

const TextEditorR = () =>{
	const dispatch = useDispatch();
	const {active:docNew} = useSelector( state => state.notes );
   	const {body,id}=docNew;
	const [stateEditor, setStateEditor] = useState({ value: body });
	const activeId = useRef( docNew.id );
	
	useEffect(() => {
		if(docNew.id!==activeId.current){
	    	setStateEditor({ value : docNew.body });
	    	activeId.current=docNew.id
	  	}
	}, [docNew])
	
	const handleChange = text => {
		docNew.body = text;
	    setStateEditor({ value : text });
	    dispatch(startSaveNote(docNew));
	};
	return (
	    <div className="text-editor">
	    	<EditorToolBar />
	      	<ReactQuill
	        	theme="snow"
	        	value={stateEditor.value}
	        	onChange={handleChange}
	        	placeholder={"Escriba algo..."}
	        	modules={modules}
	        	formats={formats}
	      	/>
	    </div>
	 );
};
export default TextEditorR;
