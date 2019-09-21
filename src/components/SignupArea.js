import React from 'react';
import { createZone } from '../lib';

import { PageContext } from '../providers/tracking-page-provider';

const SignupArea = () => {
  const { ZoneProvider, ZoneConsumer } = createZone();

  return (
    <div>
      <ZoneProvider parentContext={PageContext} name={'section'} value={'signup-area'}>
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

export default SignupArea;