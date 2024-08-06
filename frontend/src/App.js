import logo from './logo.svg';
import Blog from './pages/blog/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import SignInSide from './pages/sign-in-side/SignInSide';
import { Container } from '@mui/material';
import AppTheme from './theme';
import { useState } from 'react';
import SignUp from './pages/sign-up/SignUp';

const sections = [
  { title: 'Home', url: '#' },
  { title: 'About', url: '#' },
  { title: 'Member', url: '#' },
  { title: 'Publication', url: '#' },
  { title: 'Activities', url: '#' },
  { title: 'Registration', url: '#' },
];

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
}

function App() {
  const [mode, setMode] = useState('light');
  const defaultTheme = createTheme(AppTheme(mode));
  const token = getToken();

  if(!token) {
    return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {/* <SignInSide setToken={setToken} /> */}
        <SignUp />
      </ThemeProvider>
    )
  }
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header title="IPAC Lab" sections={sections} />
        <Router>
          <Routes>
            <Route path="" element={<Blog />} />
            <Route path="/home" element={<Blog />} />
            {/* <Route path="/about" element={<Blog />} /> */}
            {/* <Route path="/publication" element={<Blog />} /> */}
            {/* <Route path="/activities" element={<Blog />} /> */}
            {/* <Route path="/member" element={<Blog />} /> */}
            {/* <Route path="/login" element={<Blog />} /> */}
          </Routes>
        </Router>
          
        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
