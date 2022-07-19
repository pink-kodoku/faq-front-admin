import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route, Navigate,
} from "react-router-dom";
import LoginPage from "./pages/login/Login.page";
import QuestionsPage from "./pages/questions/Questions.page";
import CategoriesPage from "./pages/categories/Categories.page";
import CategoryPage from "./pages/category/Category.page";
import NotFoundPage from "./pages/not-found/NotFound.page";
import QuestionPage from "./pages/question/Question.page";
import {Box, createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import darkScrollbar from "@mui/material/darkScrollbar";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {
  }
});

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                ...darkScrollbar(),
                color: "text.primary",
                backgroundColor: "background.default",
              },
              a: {
                textDecoration: 'none !important'
              }
            }
          }
        }
      }),
    [prefersDarkMode, mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box sx={{backgroundColor: 'background.default'}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to='/questions' replace/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/questions' element={<QuestionsPage/>}/>
              <Route path='/categories' element={<CategoriesPage/>}/>
              <Route path='/question/:id' element={<QuestionPage/>}/>
              <Route path='/category/:id' element={<CategoryPage/>}/>
              <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
