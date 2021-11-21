import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

import { Layout, UserCard } from '../../components';
import { User } from '../../models';
import './styles.css';

function Home({ appData }: { appData: User[] }) {
  const [candidates, setCandidates] = useState(appData);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setCandidates(appData);
  }, [appData]);

  const handleSearch = () => {
    if (searchValue.length) {
      const userList = appData.filter((user) =>
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
      setCandidates(appData);
    }
  };

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
            <h1 className="ListHeading">All Candidates</h1>
            {!candidates.length && (
              <h4 style={{ marginTop: '20px' }}>No Candidates found</h4>
            )}
            <div className="ListWrapper">
              {candidates.map((user) => {
                return (
                  <UserCard
                    onClick={() => navigate(`${user.id}`)}
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

export default Home;
