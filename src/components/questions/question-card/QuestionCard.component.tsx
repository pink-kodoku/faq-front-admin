import React from 'react';
import {Question} from "../../../global.interface";
import {Button, Card, CardActions, CardContent} from "@mui/material";
import {Link} from "react-router-dom";


const QuestionCardComponent: React.FC<Question> = (props) => {
  return (
    <Card>
      <CardContent>
        <div>{props.title}</div>
        <div>{props.content}</div>
      </CardContent>
      <CardActions>
        <Link to={`/question/${props.id}`}><Button size="small">Перейти</Button></Link>
      </CardActions>
    </Card>
  );
};

export default QuestionCardComponent;