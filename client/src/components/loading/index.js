import React from 'react';
import { Lockbody, Picture, ReleaseBody, Spinner } from './styles/loading';

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <Lockbody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
