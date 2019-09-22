import React from 'react';
import { createZone } from '../lib';
import { PageContext } from './tracking-page-provider';

const NAMESPACE = 'section';

const { 
  SectionContext, 
  ZoneProvider, 
  ZoneConsumer: SectionConsumer
} = createZone();

const SectionProvider = ({ children, value }) => (
  <ZoneProvider parentContext={PageContext} name={NAMESPACE} value={value}>
    {children}
  </ZoneProvider>
);

export {
  SectionContext,
  SectionProvider,
  SectionConsumer
};