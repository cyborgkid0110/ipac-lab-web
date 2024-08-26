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
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/dashboard/pages/home/Home';
import Publication from './pages/dashboard/pages/publication/Publication';
import Activities from './pages/dashboard/pages/activities/Activities';
import Technology from './pages/dashboard/pages/technology/Technology';
import ModifyActivity from './pages/dashboard/pages/activities/ModifyActivity';
import ModifyTechnology from './pages/dashboard/pages/technology/ModifyTechnology';
import ModifyMember from './pages/dashboard/pages/member/ModifyMember';
import AddArticle from './pages/dashboard/pages/publication/AddArticle';
import AddActivity from './pages/dashboard/pages/activities/AddActivity';
import AddTechnology from './pages/dashboard/pages/technology/AddTechnology';
import AddMember from './pages/dashboard/pages/member/AddMember';
import Member from './pages/dashboard/pages/member/Member';
import ModifyArticle from './pages/dashboard/pages/publication/ModifyArticle';
import About from './pages/about/About';
import TechnologyPublic from './pages/technology/TechnologyPublic';
import ResearchPublic from './pages/research/ResearchPublic';
import ActivitiesPublic from './pages/activity/ActivitiesPublic';
import MembersPublic from './pages/members/MembersPublic';

const sections = [
  { title: 'Home', url: '/home' },
  { title: 'About', url: '/about' },
  { title: 'Technologies', url: '/technology' },
  { title: 'Research', url: '/research' },
  { title: 'Activities', url: '/activities' },
  { title: 'Member', url: '/members' },
  { title: 'Registration', url: '/registration' },
];

const noHeaderFooter = [
  '/login', '/signup', '/reset-pw', '/change-pw', 
  '/developer',
];

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
}

const checkException = (arrPath, path) => {
  return arrPath.includes(path);
}

const ConditionalHeaderFooter = ({ title, sections, urlPath, children }) => {
  if (!checkException(noHeaderFooter, urlPath)) {
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

function devURLPath(urlPath) {
  return urlPath.startsWith('/developer');
}

const ConditionalRoutes = () => {
  const [mode, setMode] = useState('light');
  const defaultTheme = createTheme(AppTheme(mode));
  const token = getToken();
  const location = useLocation();
  if (devURLPath(location.pathname)) {
    return (
      <Routes>
        <Route 
          path='/developer' 
          element={<Dashboard element={<Home />} titlePage='Home' pagePath={['Home']} />}
        />
        <Route 
          path='/developer/home' 
          element={<Dashboard element={<Home />} titlePage='Home' pagePath={['Home']} />}
        />
        <Route 
          path='/developer/publication' 
          element={<Dashboard element={<Publication />} titlePage='Publications' pagePath={['Home', 'Publications']} />}
        />
        <Route 
          path='/developer/activity' 
          element={<Dashboard element={<Activities />} titlePage='Activities' pagePath={['Home', 'Activities']} />}
        />
        <Route 
          path='/developer/technology' 
          element={<Dashboard element={<Technology />} titlePage='Technologies' pagePath={['Home', 'Technologies']} />}
        />
        <Route 
          path='/developer/member' 
          element={<Dashboard element={<Member />} titlePage='Members' pagePath={['Home', 'Members']} />}
        />
        <Route 
          path='/developer/publication/modify' 
          element={<Dashboard element={<ModifyArticle />} titlePage='Publications' pagePath={['Home', 'Publications', 'Modify']} />}
        />
        <Route 
          path='/developer/activity/modify' 
          element={<Dashboard element={<ModifyActivity />} titlePage='Activities' pagePath={['Home', 'Activities', 'Modify']} />}
        />
        <Route 
          path='/developer/technology/modify' 
          element={<Dashboard element={<ModifyTechnology />} titlePage='Technologies' pagePath={['Home', 'Technologies', 'Modify']} />}
        />
        <Route 
          path='/developer/member/modify' 
          element={<Dashboard element={<ModifyMember />} titlePage='Members' pagePath={['Home', 'Members', 'Modify']} />}
        />
        <Route 
          path='/developer/publication/add' 
          element={<Dashboard element={<AddArticle />} titlePage='Publications' pagePath={['Home', 'Publications', 'Add']} />}
        />
        <Route 
          path='/developer/activity/add' 
          element={<Dashboard element={<AddActivity />} titlePage='Activities' pagePath={['Home', 'Activities', 'Add']} />}
        />
        <Route 
          path='/developer/technology/add' 
          element={<Dashboard element={<AddTechnology />} titlePage='Technologies' pagePath={['Home', 'Technologies', 'Add']} />}
        />
        <Route 
          path='/developer/member/add' 
          element={<Dashboard element={<AddMember />} titlePage='Members' pagePath={['Home', 'Members', 'Add']} />}
        />
      </Routes>
    )
  }
  
  return (
    <ThemeProvider theme={defaultTheme}>  
      <CssBaseline />
      <Container maxWidth={checkException(noHeaderFooter, location.pathname) ? 'xl' : '2000px'} style={{padding: 0}}> 
        <ConditionalHeaderFooter title="IPAC Lab" sections={sections} urlPath={location.pathname}>
          <Routes>
            <Route path="" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/technology" element={<TechnologyPublic />} />
            <Route path="/home" element={<Blog />} />
            <Route path="/research" element={<ResearchPublic />} />
            <Route path="/login" element={<SignInSide setToken={setToken} />} />
            <Route path="activities" element={<ActivitiesPublic />} />
            <Route path="/members" element={<MembersPublic />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/reset-pw" element={<ResetPassword />} />
            <Route path="/change-pw" element={<ChangePassword />} />
          </Routes>
        </ConditionalHeaderFooter>
      </Container>
    </ThemeProvider>
  )
}

function App() {
  return (
    <Router>
      <ConditionalRoutes />
    </Router>
  );
}

export default App;
