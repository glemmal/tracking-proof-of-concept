import React from 'react';
import { createZone } from '../lib';
import { PageContext } from './tracking-page-provider';

const { 
  SectionContext, 
  ZoneProvider, 
  ZoneConsumer: SectionConsumer
} = createZone();

const SectionProvider = ({ children, value }) => (
  <ZoneProvider parentContext={PageContext} name="section" value={value}>
    {children}
  </ZoneProvider>
);

export {
  SectionContext,
  SectionProvider,
  SectionConsumer
};