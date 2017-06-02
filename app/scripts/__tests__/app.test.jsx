import { install } from 'offline-plugin/runtime';

jest.mock('offline-plugin/runtime');

// eslint-disable-next-line global-require
const subject = () => require('../app.jsx');

it('calls the offline-plugin install script', () => {
  subject();
  expect(install).toBeCalled();
});
