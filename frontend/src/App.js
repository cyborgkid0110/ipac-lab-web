import logo from './logo.svg';
import Blog from './pages/blog/Blog';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import SignInSide from './pages/sign-in-side/SignInSide';
import { Container } from '@mui/material';
import AppTheme from './theme';
import { useState } from 'react';
import SignUp from './pages/sign-up/SignUp';
import ResetPassword from './pages/reset-pw/ResetPassword';
import ChangePassword from './pages/change-pw/ChangePassword';

const sections = [
  { title: 'Home', url: '/home' },
  { title: 'About', url: '/about' },
  { title: 'Member', url: '/member' },
  { title: 'Publication', url: '/publication' },
  { title: 'Activities', url: '/activities' },
  { title: 'Registration', url: '/registration' },
];

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
}

const ConditionalHeaderFooter = ({ title, sections, children }) => {
  const location = useLocation();
  
  // Chỉ render Header và Footer nếu không phải trang /login
  if (location.pathname !== '/login' && location.pathname !== '/signup' && 
    location.pathname !== '/reset-pw' && location.pathname !== '/change-pw') {
    return (
      <>
        <Header title={title} sections={sections} />
          {children}
        <Footer />
      </>
    );
  }
  return <>{children}</>;
};

function App() {
  const [mode, setMode] = useState('light');
  const defaultTheme = createTheme(AppTheme(mode));
  const token = getToken();

  // if(!token) {
  //   return (
  //     <ThemeProvider theme={defaultTheme}>
  //       <CssBaseline />
  //       {/* <SignInSide setToken={setToken} /> */}
  //       <SignInSide />
  //     </ThemeProvider>
  //   )
  // }
  
  return (
    <ThemeProvider theme={defaultTheme}>  
      <CssBaseline />
      <Container maxWidth="xl"> 
      <Router>
        <ConditionalHeaderFooter title="IPAC Lab" sections={sections}>
          <Routes>
            <Route path="" element={<Blog />} />
            <Route path="/home" element={<Blog />} />
            <Route path="/login" element={<SignInSide setToken={setToken} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/reset-pw" element={<ResetPassword />} />
            <Route path="/change-pw" element={<ChangePassword />} />
            {/* <Route path="/about" element={<Blog />} /> */}
            {/* <Route path="/publication" element={<Blog />} /> */}
            {/* <Route path="/activities" el ement={<Blog />} /> */}
            {/* <Route path="/member" element={<Blog />} /> */}
          </Routes>
        </ConditionalHeaderFooter>
      </Router>
        </Container>
    </ThemeProvider>
  );
}

export default App;
