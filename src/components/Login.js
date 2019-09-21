import React from 'react';

import { ZoneProvider } from '../providers/tracking-page-provider';

import LoginArea from './LoginArea';

const Login = () => {
  return (
    <ZoneProvider name={'page'} value={'login'}>
      <LoginArea />
    </ZoneProvider>
  );
}

export default Login;