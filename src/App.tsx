import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ListingPage, CandidateInfo } from './containers';
import { User } from './models';
import './App.css';

function App() {
  const [appData, setAppData] = useState<User[]>([]);
  const [shortlistedData, setShortlistedData] = useState<User[]>([]);
  const [rejectedData, setRejectedData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(
          'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json'
        );
        const users = await response.json();
        setAppData(users);
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCandidates();
  }, []);

  const isUserShortListed = (userId: string) => {
    const user = shortlistedData.find((user) => user.id === userId);
    if (user) {
      return true;
    }
    return false;
  };

  const isUserRejected = (userId: string) => {
    const user = rejectedData.find((user) => user.id === userId);
    if (user) {
      return true;
    }
    return false;
  };

  const shortListCandidate = (id: string) => {
    if (!isUserShortListed(id)) {
      // proceed only if user is not already shortlisted
      const user = appData.find((user) => user.id === id);
      if (user) {
        setShortlistedData((prevList) => [...prevList, user]);
        if (isUserRejected(id)) {
          // if user was previously rejected remove them from that list
          setRejectedData(rejectedData.filter((user) => user.id !== id));
        }
        console.log('Candidate Shortlisted successfully');
      }
    }
  };

  const rejectCandidate = (id: string) => {
    if (!isUserRejected(id)) {
      // proceed only when user is not already rejected
      const user = appData.find((user) => user.id === id);
      if (user) {
        setRejectedData((prevList) => [...prevList, user]);
        if (isUserShortListed(id)) {
          // if user was previously shortlisted, remove them from that list
          setShortlistedData(shortlistedData.filter((user) => user.id !== id));
        }
        console.log('Candidate Rejected successfully');
      }
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ListingPage
              userData={appData}
              heading={'All Candidates'}
              loading={loading}
            />
          }
        />
        <Route
          path="/:candidateId"
          element={
            <CandidateInfo
              userData={appData}
              shortCandidate={shortListCandidate}
              rejectCandidate={rejectCandidate}
              isShortListed={isUserShortListed}
              isRejected={isUserRejected}
            />
          }
        />
        <Route
          path="/shortlist"
          element={
            <ListingPage
              userData={shortlistedData}
              heading={'Shortlisted Candidates'}
              loading={loading}
            />
          }
        />
        <Route
          path="/reject"
          element={
            <ListingPage
              userData={rejectedData}
              heading={'Rejected Candidates'}
              loading={loading}
            />
          }
        />
        <Route path="*" element={null} />
      </Routes>
    </Router>
  );
}

export default App;
