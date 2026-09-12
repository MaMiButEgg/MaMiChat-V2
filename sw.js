// mamichat service worker
// Sadece "ana ekrana ekle" özelliğinin çalışması için gerekli (offline destek yok).
self.addEventListener("install", (e) => { self.skipWaiting(); });
self.addEventListener("activate", (e) => { self.clients.claim(); });
self.addEventListener("fetch", (e) => {
  // ağdan direkt geçir, önbellekleme yapmıyoruz
});
