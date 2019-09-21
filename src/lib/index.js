import React, { createContext, useContext } from 'react';

const TrackingRootContext = createContext();

const TrackingRootProvider = ({ children, onEvent }) => {
  return (
    <TrackingRootContext.Provider value={onEvent}>
      {children}
    </TrackingRootContext.Provider>
  );
};

const createZone = () => {
  const ZoneContext = createContext();

  const ZoneProvider = ({ parentContext = TrackingRootContext, name, value, children}) => {
    const parentDispatch = useContext(parentContext);
    const dispatch = (event) => {
      parentDispatch({
        ...event,
        [name]: value
      });
    };

    return (
      <ZoneContext.Provider value={dispatch}>
        {children}
      </ZoneContext.Provider>
    );
  }

  const ZoneConsumer = ({ children }) => {
    return (
      <ZoneContext.Consumer>
        {children}
      </ZoneContext.Consumer>
    )
  }

  return { ZoneProvider, ZoneContext, ZoneConsumer };
}

export { TrackingRootProvider, TrackingRootContext, createZone }