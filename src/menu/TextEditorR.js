import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../actions/notes';
import ReactQuill from "react-quill";
import EditorToolBar, { modules, formats } from "./EditorToolBar";
import "react-quill/dist/quill.snow.css";
//import "./styles.css";
import '../styles/styles.css';

const TextEditorR = () =>{
	//const [state, setState] = React.useState({ value: null });
	const dispatch = useDispatch();
	const {active} = useSelector( state => state.notes);
	const {title, body} = active
	console.log("body text "+body);
	//const [stateEditor, setStateEditor] = useState(() =>  ,);
	const [stateEditor, setStateEditor] = React.useState({ text: body });
	console.log("inicio text")
	console.log(stateEditor.text)
	const handleChange = text => {
		console.log("handleChange");
		console.log(text)
		active.body = text;
	    setStateEditor({ text });
	    dispatch(startSaveNote(active));
	};
	return (
	    <div className="text-editor">
	      <EditorToolBar />
	      <ReactQuill
	        theme="snow"
	        value={stateEditor.text}
	        onChange={handleChange}
	        placeholder={"Escriba algo..."}
	        modules={modules}
	        formats={formats}
	      />
	    </div>
	 );
};
export default TextEditorR;