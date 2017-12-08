import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './shared/Header';
import HomePage from './home/HomePageContainer';
import ProfilePage from './account/ProfilePage';
import LoginPage from './account/LoginPageContainer';
import ProjectsPage from './account/ProjectsPage';

export default function Template(props) {
  return (
    <Router>
      <div className="wrapper">
        <Header username="zach" progress={props.progress} />
        <section className="page-content container-fluid">
          <Route exact path="/" component={HomePage} />
          <Route exact path ="/account/login" component={LoginPage} />
          <Route path="/account/profile/:id" component={ProfilePage} />
          <Route path="/account/projects" component={ProjectsPage} />
        </section>
      </div>
    </Router>
  );
}
