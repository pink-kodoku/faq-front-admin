import React, {useState} from 'react';
import {Box, Container, useTheme} from "@mui/material";
import QuestionMenu from "../../components/question/menu/QuestionMenu.component";
import Layout from "../../components/common/layout";
import {Question} from "../../global.interface";
import Editor from '../../components/question/editor/Editor.component'
import QuestionPreview from "../../components/question/preview/QuestionPreview.component";

const questionData: Question = {
  id: 1,
  title: 'Почему листья зеленые?',
  content: 'Потому что акоко као9коа9коа шокшоаш коашкошао ккшаош коашко шкоаш коашокшоаокшоакшоа шаокшоашо'
}

type Mode = 'edit' | 'preview';

const QuestionPage = () => {
  const [mode, setMode] = useState<Mode>('preview')

  const onEdit = () => {
    setMode('edit')
  }

  const onPreview = () => {
    setMode('preview')
  }

  const onDelete = () => {

  }


  return (
    <Layout>
      <Container>
        <Box sx={{my: 2}}>
          <QuestionMenu
            onEdit={onEdit}
            onDelete={onDelete}
            onPreview={onPreview}
          />

          {mode === 'preview' ? <QuestionPreview/> : <Editor initialValue={questionData.content}/>}
        </Box>
      </Container>
    </Layout>
  );
};

export default QuestionPage;