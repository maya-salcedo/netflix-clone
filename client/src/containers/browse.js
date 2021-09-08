import React, { useState } from 'react';
import { FooterContainer } from './footer';

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
    <SelectProfileContainer />
  );
}
