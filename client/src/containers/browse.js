import React, { useState } from 'react';
import { Header } from '../components';
import { FooterContainer } from './footer';
import { SelectProfileContainer } from './profiles';
import * as ROUTES from '../constants/routes';

export default function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const [category, setCategory] = useState('series');

  const user = {
    displayName: 'Maya',
    photoURL: '1',
  };

  return profile.displayName ? (
    <>
      <Header src="joker" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src="/images/misc/logo.png"
              alt="Netflix"
            ></Header.Logo>
            <Header.Link
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.Link>
            <Header.Link
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('films')}
            >
              Films
            </Header.Link>
          </Header.Group>
        </Header.Frame>
      </Header>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
