import fetch from '../fetch';

const promise = fetch('exampleUrl');

it('attaches a script tag to the body with the url', () =>
  expect(document.body.innerHTML).toBe('<script src="exampleUrl"></script>')
);

it('resolves the promise when the "flickrcb" function is called', () => {
  const data = { items: ['image1', 'image2'] };
  global.flickrcb(data);

  promise.then(response =>
    expect(response).toBe(data)
  );
});
