import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './shared/Header';
import HomePage from './home/HomePageContainer';
import ProfilePage from './account/ProfilePage';
import LoginPage from './account/LoginPageContainer';
import ProjectsPage from './account/ProjectsPage';

export default function Template(props) {
  const { authentication, progress } = props;
  return (
    <Router>
      <div className="wrapper">
        <Header username="anon" authentication={authentication} />
        <section className="page-content container-fluid">
          <div className="loader-wrapper" style={progress > 0 ? { display: 'block' } : { display: 'none' }}>
            <div className="loader-box">
              <div className="loader">Loading...</div>
            </div>
          </div>
          <Route exact path="/" component={HomePage} />
          <Route exact path ="/account/login" component={LoginPage} />
          <Route path="/account/profile/:id" component={ProfilePage} />
          <Route path="/account/projects" component={ProjectsPage} />
        </section>
      </div>
    </Router>
  );
}
