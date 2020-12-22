import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw,ContentState, convertFromHTML} from "draft-js";
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../actions/notes';


import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const TextEditor = () =>{
  const dispatch = useDispatch();
  const {active} = useSelector( state => state.notes);
  const {title, body} = active
  console.log("body")
  console.log(body);
  var initialState;
        if (body=="''") {
          console.log("Esta vacio !!! ")
          initialState = EditorState.createEmpty();
        }
        else {
          console.log("No está vacio...")
          // const processedHTML = DraftPasteProcessor.processHTML(this.props.content);
           const contentState = ContentState.createFromBlockArray(convertFromHTML(body));
           //move focus to the end. 
           initialState = EditorState.createWithContent(contentState);
           initialState = EditorState.moveFocusToEnd(initialState);
        }
  const [editorState, setEditorState] = useState(() => initialState,);

  const onEditorStateChange = (state) => {
    setEditorState(state)
    var data = draftToHtml(convertToRaw(state.getCurrentContent()));
    active.body = data;
    dispatch(startSaveNote(active));
    console.log(data);
  };

   return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
}
export default TextEditor;
