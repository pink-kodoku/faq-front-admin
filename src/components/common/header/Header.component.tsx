import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import {Container, Stack} from "@mui/material";
import {Link} from "react-router-dom";
import {Link as LinkStyle} from '@mui/material'
import ThemeToggle from "../theme-toggle/ThemeToggle.component";

interface Props {
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const {children} = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{position: 'fixed', bottom: 16, right: 16}}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function BackToTop() {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Container>
            <Stack direction="row" spacing={2} alignItems='center'>
              <Link to='/questions'>
                <LinkStyle sx={{color: 'common.white'}}>Вопросы</LinkStyle>
              </Link>
              <Link to='/categories'>
                <LinkStyle sx={{color: 'common.white'}}>Категории</LinkStyle>
              </Link>
              <ThemeToggle />
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor"/>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon/>
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}