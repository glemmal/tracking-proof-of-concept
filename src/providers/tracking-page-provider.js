import { createZone } from '../lib';
import { TrackingRootContext } from './tracking-root-provider';

const { 
  ZoneContext: PageContext, 
  ZoneProvider: PageProvider,
  ZoneConsumer: PageConsumer
} = createZone(TrackingRootContext, 'page');

export {
  PageContext,
  PageProvider,
  PageConsumer
};