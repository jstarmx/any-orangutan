import { install } from 'offline-plugin/runtime';
import React from 'react';
import { render } from 'react-dom';

import Gallery from './components/gallery';

// Install service worker for offline functionality
install();

// Create render callback function to pass down with Flickr request
window.flickrcb = data => render(
  <Gallery items={ data.items } />,
  document.querySelector('.gallery-container')
);
