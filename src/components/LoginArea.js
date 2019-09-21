import React from 'react';
import { createZone } from '../lib';

import { ZoneContext as PageContext } from '../providers/tracking-page-provider';

const LoginArea = () => {
  const { ZoneProvider, ZoneConsumer } = createZone();
  
  return (
    <div>
      <ZoneProvider parentZone={PageContext} name={'section'} value={'login-area'}>
        <ZoneConsumer>
          {(dispatch) => (
            <div>
              <p>Awesome login component</p>
              <button onClick={() => {
                dispatch({
                  action: 'click'
                })
              }}>Login</button>
            </div>
          )}
        </ZoneConsumer>
      </ZoneProvider>
    </div>
  )
};

export default LoginArea;