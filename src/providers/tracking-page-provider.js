import React from 'react';
import { createZone } from '../lib';
import { TrackingRootContext } from './tracking-root-provider';

const NAMESPACE = 'page';

const { 
  ZoneContext: PageContext, 
  ZoneProvider, ZoneConsumer: 
  PageConsumer 
} = createZone();

const PageProvider = ({ children, page }) => (
  <ZoneProvider parentContext={TrackingRootContext} name={NAMESPACE} value={page}>
    {children}
  </ZoneProvider>
);

export {
  PageContext,
  PageProvider,
  PageConsumer
};