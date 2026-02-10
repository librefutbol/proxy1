'use strict';

// Service Worker to intercept network requests
self.addEventListener('fetch', (event) => {
    // Handle proxy routing
    const url = new URL(event.request.url);

    // Example proxy routing logic
    if (url.hostname === 'api.example.com') {
        // Redirect to the internal API endpoint
        const newUrl = `https://internal.example.com${url.pathname}`;
        event.respondWith(fetch(newUrl, event.request));
    } else {
        // Proceed with the original request
        event.respondWith(fetch(event.request));
    }
});