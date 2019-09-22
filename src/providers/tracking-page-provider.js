import React from 'react';
import { createZone } from '../lib';
import { TrackingRootContext } from './tracking-root-provider';

const { ZoneContext: PageContext, ZoneProvider } = createZone();

const PageProvider = ({ children, page }) => (
  <ZoneProvider parentContext={TrackingRootContext} name="page" value={page}>
    {children}
  </ZoneProvider>
);

export {
  PageContext,
  PageProvider
};