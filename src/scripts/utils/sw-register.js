const swRegister = async () => {
  if(!('serviceWorker' in navigator)) {
    console.log('Sevice worker not supported in the browser');
    return;
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Sevice worker registered');
  } catch (error) {
    console.log('Failecd to register service worker', error);
  }
};

export default swRegister;
