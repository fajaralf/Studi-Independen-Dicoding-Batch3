import * as WorkboxWindow from 'workbox-window';

const wb = new WorkboxWindow.Workbox('/sw.bundle.js');

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  try {
    await wb.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
