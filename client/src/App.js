import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './utils/auth';

import RecentCollabs from './pages/RecentCollabs';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Search from './pages/Search';
import Searchcoders from './pages/Searchcoders';
import Header from './components/Header';
import SmallHeader from './components/SmallHeader';
import Footer from './components/Footer';
import Contact from './pages/Contact';

import reasons from './utils/LFCreasons';
// import profilecollabs from './pages/profilecollabs';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="rootDiv">
          {Auth.loggedIn() ? <SmallHeader /> : <Header reasons={reasons} />}
          {/* ^Conditional to switch between the two types of headers when the user is logged in or not logged in */}
          <div className="container">
            <Routes>
              <Route path="/" element={<RecentCollabs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/search" element={<Search />} />
              <Route path="/searchcoders" element={<Searchcoders />} />
              <Route path="/me" element={<Profile />} />
              {/* profilecollabs={profilecollabs} */}
              {/* ^ this represents the collab information that will eventually be passed into the "My Collabs" section of the Profile page */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/profiles/:profileId" element={<Profile />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
