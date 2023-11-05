import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ResumePage from './components/pages/ResumePage';
import ProjectsPage from './components/pages/ProjectsPage';
import ContactPage from './components/pages/ContactPage';

const routes = [
  { path: '/', component: HomePage, exact: true },
  { path: '/about', component: AboutPage },
  { path: '/resume', component: ResumePage },
  { path: '/projects', component: ProjectsPage },
  { path: '/contact', component: ContactPage },
];

export default routes;
