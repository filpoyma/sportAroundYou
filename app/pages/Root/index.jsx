import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Footer from '@/containers/Footer';
import Header from '@/containers/Header';
import GlobalStyles from '@/GlobalStyles';
import NotFoundPage from '@/pages/NotFoundPage/Loadable';
import TestPage from '@/pages/TestPage/Loadable';

import { ROUTE } from './constants';

const Root = () => (
  <>
    <Header />
    <main>
      <Switch>
        <Redirect exact from="/" to={`/${ROUTE.ATHLETE}/45`} />
        <Route path={`/${ROUTE.ATHLETE}/:athleteId`} component={TestPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </main>
    <Footer />
    <GlobalStyles />
  </>
);

export default Root;
