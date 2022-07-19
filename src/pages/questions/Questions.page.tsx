import React from 'react';
import {Question} from "../../global.interface";
import QuestionCard from '../../components/questions/question-card'
import Layout from '../../components/common/layout'
import {Box, Container, Grid, Pagination} from "@mui/material";

const questionsData: Question[] = [
  {
    id: 1,
    title: 'Question 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ipsum.\n'
  },
  {
    id: 1,
    title: 'Question 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ipsum.\n'
  },
  {
    id: 1,
    title: 'Question 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ipsum.\n'
  },
  {
    id: 1,
    title: 'Question 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ipsum.\n'
  },
  {
    id: 1,
    title: 'Question 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ipsum.\n'
  },
  {
    id: 1,
    title: 'Question 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ipsum.\n'
  },
  {
    id: 1,
    title: 'Question 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ipsum.\n'
  },
  {
    id: 1,
    title: 'Question 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ipsum.\n'
  },
  {
    id: 1,
    title: 'Question 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ipsum.\n'
  },
  {
    id: 1,
    title: 'Question 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ipsum.\n'
  },
  {
    id: 1,
    title: 'Question 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ipsum.\n'
  },
  {
    id: 1,
    title: 'Question 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ipsum.\n'
  },

]


const QuestionsPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Box sx={{my: 3}}>
          <Grid container spacing={1}>
            {questionsData.map(item => <Grid item sm={5} md={3} key={item.id}><QuestionCard {...item}/></Grid>)}
          </Grid>
        </Box>
        <Pagination count={10} variant="outlined" color="primary"/>
      </Container>
    </Layout>
  );
};

export default QuestionsPage;