import * as actions from '../filter';

it('exports an FILTER constant', () =>
  expect(actions.FILTER).toBe('FILTER')
);

it('exports a filter action', () => {
  const data = 'favourites';
  const expectedAction = {
    data,
    type: actions.FILTER,
  };

  expect(actions.filter(data)).toEqual(expectedAction);
});
