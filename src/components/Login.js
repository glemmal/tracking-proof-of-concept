import React from 'react';

import { PageProvider } from '../providers/tracking-page-provider';

import LoginArea from './LoginArea';
import SignupArea from './SignupArea';

const Login = () => {
  return (
    <div>
      <PageProvider value="login">
        <LoginArea />
      </PageProvider>
      <PageProvider value="signup">
        <SignupArea />
      </PageProvider>
    </div>
  );
}

export default Login;