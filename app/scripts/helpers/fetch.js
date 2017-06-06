global.flickrcb = data => data;
export const script = document.createElement('script');

export default (url) => {
  script.src = url;
  document.body.appendChild(script);

  return new Promise((resolve, reject) => {
    global.flickrcb = resolve;
    script.onerror = reject;
  });
};
