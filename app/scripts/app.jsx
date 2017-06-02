import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import React from 'react';
import { render } from 'react-dom';

import Gallery from './components/gallery';

OfflinePluginRuntime.install();

window.flickrcb = data => render(
  <Gallery items={ data.items } />,
  document.querySelector('.gallery-container')
);
