import React, { useState , useRef , useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw,ContentState, convertFromHTML} from "draft-js";
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../actions/notes';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import {stateFromHTML} from 'draft-js-import-html';

const TextEditor = () =>{
  const dispatch = useDispatch();
  const {active:docNew} = useSelector( state => state.notes);
  const {title, body} = docNew;
    const options: any = {
      customInlineFn: (element: any, {Style, Entity}: any) => {
          if (element.style.color) {
              return Style ('color-' + element.style.color);
          }
          if (element.style.fontSize) {
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

  const activeId = useRef( docNew.id );

  useEffect(() => {
    if(docNew.id!==activeId.current){
        var newstate = EditorState.createWithContent(stateFromHTML(docNew.body, options));
        setEditorState(newstate);
        activeId.current=docNew.id
      }
  }, [docNew])

  const onEditorStateChange = (state) => {
    setEditorState(state);
    var data = draftToHtml(convertToRaw(state.getCurrentContent()));
    docNew.body = data;
    dispatch(startSaveNote(docNew));
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
