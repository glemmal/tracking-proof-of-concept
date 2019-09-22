import { createZone } from '../lib';
import { TrackingRootContext } from './tracking-root-provider';

const NAMESPACE = 'page';

const { 
  ZoneContext: PageContext, 
  ZoneProvider: PageProvider,
  ZoneConsumer: PageConsumer
} = createZone(TrackingRootContext, NAMESPACE);

export {
  PageContext,
  PageProvider,
  PageConsumer
};