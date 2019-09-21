import React from 'react';
import { createZone } from '../lib';

import { PageContext } from '../providers/tracking-page-provider';

const LoginArea = () => {
  const { ZoneProvider, ZoneConsumer, ZoneContext } = createZone();
  const { ZoneProvider: ChildZoneProvider, ZoneConsumer: ChildZoneConsumer } = createZone();

  return (
    <div>
      <ZoneProvider parentContext={PageContext} name={'section'} value={'login-area'}>
        <div>
          <p>Awesome login component</p>
          <ZoneConsumer>
            {(dispatch) => (
              <button onClick={() => {
                dispatch({
                  action: 'click'
                })
              }}>Parent button</button>
            )}
          </ZoneConsumer>
          <ChildZoneProvider parentContext={ZoneContext} name={'atom'} value={'login-child-area'}>
            <p>This is a child area</p>
            <ChildZoneConsumer>{(dispatch) => (
              <button onClick={() => {
                dispatch({
                  action: 'click'
                })
              }}>Child button</button>
            )}
            </ChildZoneConsumer>
          </ChildZoneProvider>
        </div>
      </ZoneProvider>
    </div>
  )
};

export default LoginArea;