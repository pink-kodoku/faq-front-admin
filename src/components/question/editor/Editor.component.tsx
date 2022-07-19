import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Button, useTheme} from "@mui/material";
import {Editor} from "@tinymce/tinymce-react";
import {Editor as TinyMCEEditor} from 'tinymce';

interface EditorProps {
  initialValue: string;
}


const EditorComponent: React.FC<EditorProps> = (props) => {
  const theme = useTheme()
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const [editorKey, setEditorKey] = useState(1)

  const save = () => {
    if (editorRef.current) {
      localStorage.setItem('1', editorRef.current.getContent())
    }
  };

  return (
    <>
      <Editor
        key={editorKey}
        init={{
          content_css: (theme.palette.mode === 'dark' ? 'dark' : 'default'),
          skin: (theme.palette.mode === 'dark' ? 'oxide-dark' : 'oxide'),
          plugins: `preview importcss searchreplace autolink 
        directionality code visualblocks visualchars fullscreen image link 
        media template codesample table charmap pagebreak nonbreaking anchor 
        insertdatetime advlist lists wordcount help charmap emoticons autoresize tinymcespellchecker`,
          toolbar: `undo redo
         | fontsize blocks 
         | bold italic underline bullist numlist emoticons
         | alignleft aligncenter alignright alignjustify
         | forecolor backcolor removeformat visualblocks
         | charmap searchreplace link code anchor`,
        }}
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={props.initialValue}
      />
      <Button sx={{mt: 2}} color="success" variant="contained" onClick={save}>Сохранить</Button>
    </>
  )
};

export default EditorComponent;