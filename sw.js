self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            // Optional: return a fallback offline page or cache response here
            return new Response("Network error happened", {
                status: 408,
                headers: { "Content-Type": "text/plain" }
            });
        })
    );
});
