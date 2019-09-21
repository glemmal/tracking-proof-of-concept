import React from 'react';
import { createZone } from '../lib';

import { ZoneContext as PageContext } from '../providers/tracking-page-provider';

const LoginArea = () => {
  const { ZoneProvider, ZoneConsumer } = createZone();
  
  return (
    <div>
      <ZoneProvider parentZone={PageContext} name={'section'} value={'login-area'}>
        <div>
          <p>Awesome login component</p>
          <ZoneConsumer>
            {(dispatch) => (
              <button onClick={() => {
                dispatch({
                  action: 'click'
                })
              }}>Login</button>
            )}
          </ZoneConsumer>
        </div>
      </ZoneProvider>
    </div>
  )
};

export default LoginArea;