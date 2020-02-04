import React from 'react';

import Spinner from '@/components/Spinner';
import loadable from '@/utils/loadable';

export default loadable(() => import('./index'), {
  fallback: <Spinner size="big" />
});
