import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaUserCheck, FaUserSlash } from 'react-icons/fa';

import { Layout } from '../../components';
import { User } from '../../models';
import './styles.css';

function Candidate({
  userData,
  shortCandidate,
  rejectCandidate,
}: {
  userData: User[];
  shortCandidate(id: string): void;
  rejectCandidate(id: string): void;
}) {
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [candidateData, setCandidateData] = useState<User>();

  useEffect(() => {
    const user = userData.find((user) => user.id === params.candidateId);
    setCandidateData(user);
    setLoading(false);
  }, [params.candidateId, userData]);

  if (loading) {
    return (
      <Layout>
        <div className="LandingPage">
          <div className="center-text">Loading ...</div>
        </div>
      </Layout>
    );
  }

  if (!loading && !candidateData?.id) {
    return (
      <Layout>
        <div className="LandingPage">
          <div className="center-text">
            <h5>User not found</h5>
            <br />
            <Link to="/">Go back </Link>
          </div>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="LandingPage flex-align-center">
        <div className="CandidateInfo">
          <h1 className="CandidateHeading">Candidate Info</h1>
          <div className="CandidateInfo__Card">
            <div
              className="UserImage"
              style={{ backgroundImage: `url(${candidateData?.Image})` }}
            ></div>
            <h2 className="UserName">{candidateData?.name}</h2>
          </div>
        </div>
        <div className="CandidateInfo__action">
          <div className="ActionContainer">
            <FaUserCheck className="ActionIcon" width={40} height={40} />
            <button
              className="ActionButton primary"
              onClick={() => {
                shortCandidate(candidateData?.id || '');
                navigate('/');
              }}
            >
              Shortlist
            </button>
          </div>
          <div className="ActionContainer">
            <FaUserSlash className="ActionIcon" width={40} height={40} />
            <button
              className="ActionButton danger"
              onClick={() => {
                rejectCandidate(candidateData?.id || '');
                navigate('/');
              }}
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Candidate;
