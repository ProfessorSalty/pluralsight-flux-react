import React from 'react';
import {DefaultRoute, NotFoundRoute, Redirect, Route} from 'react-router';

import App from './components/app';
import Homepage from './components/homepage';
import AuthorPage from './components/authors/authorPage';
import CoursePage from './components/courses/CoursePage';
import AboutPage from './components/about/aboutPage';
import NotFoundPage from './components/notFoundPage';
import ManageAuthorPage from './components/authors/manageAuthorPage';
import ManageCoursePage from './components/courses/manageCoursePage';

const routes = (
        <Route name="app" path="/" handler={App}>
            <DefaultRoute handler={Homepage} />
            <Route name="about" handler={AboutPage} />
            <Route name="authors" handler={AuthorPage} />
            <Route name="courses" handler={CoursePage} />
            <Route name="addAuthor" path="author" handler={ManageAuthorPage} />
            <Route name="addCourse" path="course" handler={ManageCoursePage} />
            <Route name="manageAuthor" path="author/:id" handler={ManageAuthorPage} />
            <Route name="manageCourse" path="course/:id" handler={ManageCoursePage} />
            <Redirect from="about-us" to="about" />
            <Redirect from="about/*" to="about" />
            <NotFoundRoute handler={NotFoundPage} />
        </Route>
    );

export default routes;