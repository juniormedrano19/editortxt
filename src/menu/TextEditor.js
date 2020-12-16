import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw,ContentState, convertFromHTML} from "draft-js";
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../actions/notes';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import {stateFromHTML} from 'draft-js-import-html';

const TextEditor = () =>{
  const dispatch = useDispatch();
  const {active} = useSelector( state => state.notes);
  const {title, body} = active;
  console.log(body);
    const options: any = {
      customInlineFn: (element: any, {Style, Entity}: any) => {
          console.log('style')
          if (element.style.color) {
            console.log('color-' + element.style.color);
              return Style ('color-' + element.style.color);
          }
          if (element.style.fontSize) {
            console.log('font-size-' + element.style.fontSize);
              return Style ('font-size-' + element.style.fontSize);
          }
      }
    };

  //const contentState = ContentState.createFromBlockArray(convertFromHTML(body));
   //EditorState.createWithContent(stateFromHTML(props.text, options));
  //var initialState = EditorState.createWithContent(contentState);
  var content = "<p>Given <span style='color: #2a00ff;'><strong>Name</strong></span></p>"
  var initialState = EditorState.createWithContent(stateFromHTML(body, options));
  initialState = EditorState.moveFocusToEnd(initialState);
          
  const [editorState, setEditorState] = useState(() => initialState,);

  const onEditorStateChange = (state) => {
    setEditorState(state);
    var data = draftToHtml(convertToRaw(state.getCurrentContent()));
    console.log("data");
    console.log(data)
    active.body = data;
    dispatch(startSaveNote(active));
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
