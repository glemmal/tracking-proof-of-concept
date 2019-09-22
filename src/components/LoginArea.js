import React from 'react';
import { SectionProvider, SectionConsumer } from '../providers/tracking-section-provider';

const LoginArea = () => {
  return (
    <div>
      <SectionProvider section="login-area">
        <div>
          <p>Awesome login component</p>
          <SectionConsumer>
            {(dispatch) => (
              <button onClick={() => {
                dispatch({
                  action: 'click'
                })
              }}>Parent button</button>
            )}
          </SectionConsumer>
        </div>
      </SectionProvider>
    </div>
  )
};

export default LoginArea;