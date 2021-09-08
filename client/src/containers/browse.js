import React, { useState } from 'react';
import { FooterContainer } from './footer';
import { SelectProfileContainer } from './profiles';

export default function BrowseContainer() {
  const [profile, setProfile] = useState({});

  const user = {
    displayName: 'Maya',
    photoURL: '1',
  };
  return profile.displayName ? (
    <>
      <p>Browse Container</p>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
