import classList from '../class_list';

it('returns a class list containing the class name and truthy modifiers', () =>
  expect(classList('lorem', { a: true, b: false })).toBe('lorem lorem--a')
);

it('returns truthy modifiers in kebab case', () =>
  expect(classList('lorem', { aBcD: true })).toBe('lorem lorem--a-bc-d')
);
