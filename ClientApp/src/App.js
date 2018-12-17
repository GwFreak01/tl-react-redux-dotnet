import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Events from './components/events/Events';
import CompanyForm from './components/companyForm/CompanyForm';
import {CompaniesList} from "./components/companiesList/CompaniesList";

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
      <Route path='/events' component={Events} />
      <Route path='/companies' component={CompanyForm} />
      <Route path='/companiesList' component={CompaniesList} />
  </Layout>
);
