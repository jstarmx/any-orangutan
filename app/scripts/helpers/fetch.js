export default (url) => {
  global.flickrcb = data => data;

  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);

  return new Promise((resolve, reject) => {
    global.flickrcb = resolve;
    script.onerror = reject;
  });
};
