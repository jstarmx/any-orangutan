import fetch, { script } from '../fetch';

it('attaches a script tag to the body with the url', () => {
  fetch('exampleUrl');
  expect(document.body.innerHTML).toBe('<script src="exampleUrl"></script>');
});

it('resolves the promise when the "flickrcb" function is called', () => {
  const promise = fetch('exampleUrl');
  const data = { items: ['image1', 'image2'] };
  global.flickrcb(data);

  promise.then(response =>
    expect(response).toBe(data)
  );
});

it('rejects the promise if the script errors', () => {
  const promise = fetch('exampleUrl');
  script.onerror('exampleError');

  promise.catch(error =>
    expect(error).toBe('exampleError')
  );
});
