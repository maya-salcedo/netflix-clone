import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid =
    (firstName === '') | (emailAddress === '') | (password === '');

  const handleSignup = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            ></Form.Input>
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              type="email"
              onChange={({ target }) => setEmailAddress(target.value)}
            ></Form.Input>
            <Form.Input
              placeholder="Password"
              value={password}
              type="password"
              autocomplete="off"
              onChange={({ target }) => setPassword(target.value)}
            ></Form.Input>
            <Form.Submit disabled={isInvalid}>Sign Up</Form.Submit>
            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign In</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
