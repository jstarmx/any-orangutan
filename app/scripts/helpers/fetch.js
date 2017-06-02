export default url =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script');
    global.flickrcb = data => resolve(data);
    script.onerror = reject;
    script.src = url;
    document.body.appendChild(script);
  });
