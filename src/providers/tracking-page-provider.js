import React from 'react';
import { createZone } from '../lib';

const { ZoneContext: PageContext, ZoneProvider } = createZone();

const PageProvider = ({ children, page }) => (
  <ZoneProvider name="page" value={page}>
    {children}
  </ZoneProvider>
);

export {
  PageContext,
  PageProvider
};