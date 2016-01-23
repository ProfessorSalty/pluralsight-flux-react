import React from 'react';
import {DefaultRoute, NotFoundRoute, Redirect, Route} from 'react-router';

import App from './components/app';
import Homepage from './components/homepage';
import AuthorPage from './components/authors/authorPage';
import AboutPage from './components/about/aboutPage';
import NotFoundPage from './components/notFoundPage';
import ManageAuthorPage from './components/authors/manageAuthorPage';

const routes = (
        <Route name="app" path="/" handler={App}>
            <DefaultRoute handler={Homepage} />
            <Route name="authors" handler={AuthorPage} />
            <Route name="about" handler={AboutPage} />
            <Route name="addAuthor" path="author" handler={ManageAuthorPage} />
            <Route name="manageAuthor" path="author/:id" handler={ManageAuthorPage} />
            <Redirect from="about-us" to="about" />
            <Redirect from="about/*" to="about" />
            <NotFoundRoute handler={NotFoundPage} />
        </Route>
    );

export default routes;