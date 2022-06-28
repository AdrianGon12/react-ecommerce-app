import React from 'react';

import './sign-in-form.styles.scss';

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase.utils';

const SignInForm = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <button onClick={logGoogleUser}>Sing in with Google Popup</button>
    </div>
  );
};

export default SignInForm;
