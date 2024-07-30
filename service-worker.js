self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  
  self.addEventListener('push', event => {
    const data = event.data.json();
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon,
    });
  });
  