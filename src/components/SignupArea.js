import React from 'react';
import { SectionProvider, SectionConsumer } from '../providers/tracking-section-provider';

const SignupArea = () => {
  return (
    <div>
      <SectionProvider value="signup-area">
        <div>
          <p>Awesome signup component</p>
          <SectionConsumer>
            {(dispatch) => (
              <button onClick={() => {
                dispatch({
                  action: 'click'
                })
              }}>Login</button>
            )}
          </SectionConsumer>
        </div>
      </SectionProvider>
    </div>
  )
};

export default SignupArea;