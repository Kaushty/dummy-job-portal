import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

import { Layout, UserCard } from '../../components';
import { User } from '../../models';
import './styles.css';

function ListingPage({
  userData,
  heading,
  loading = false,
}: {
  userData: User[];
  heading: string;
  loading?: boolean;
}) {
  const [candidates, setCandidates] = useState(userData);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setCandidates(userData);
  }, [userData]);

  const handleSearch = () => {
    if (searchValue.length) {
      const userList = userData.filter((user) =>
        user.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
      setCandidates(userList);
    } else {
      resetSearch();
    }
  };

  const resetSearch = () => {
    if (searchValue) {
      setSearchValue('');
      setCandidates(userData);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="LandingPage LoadingText">
          <div className="center-text">
            <h4>Loading ...</h4>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="LandingPage">
        <div className="SearchContainer flex-row">
          <input
            type="text"
            className="SearchBar"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search Candidates"
          />
          <div className="SearchIcon" onClick={handleSearch}>
            <AiOutlineSearch />
          </div>
        </div>
        <div className="Listing">
          <div className="UserList">
            <h1 className="ListHeading">{heading}</h1>
            {!candidates.length && (
              <h4 style={{ marginTop: '20px' }}>No Candidates found</h4>
            )}
            <div className="ListWrapper">
              {candidates.map((user) => {
                return (
                  <UserCard
                    key={user.id}
                    onClick={() => navigate(`/${user.id}`)}
                    img={user.Image}
                    name={user.name}
                  />
                );
              })}
            </div>
            {searchValue && (
              <h6
                style={{ color: 'blue', cursor: 'pointer' }}
                onClick={resetSearch}
              >
                Reset Search
              </h6>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ListingPage;
