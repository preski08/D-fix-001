/* Dompetku Marketplace — minimal stub (satu menu saja)
 * Tombol Market di header memanggil MP_open().
 * Versi ringan: tidak inject tombol ganda.
 */
(function () {
  'use strict';

  function openMP() {
    if (!window.currentUser && !(window.dk_session || localStorage.getItem('dk_session'))) {
      alert('Login dulu untuk membuka Marketplace.');
      return;
    }
    alert('Marketplace Dompetku\n\nFitur jual-beli lokal (localStorage).\nModul marketplace penuh belum dilampirkan di paket ini.\n\nGunakan Go Work / Go Drive / Chat untuk fitur utama.');
  }

  window.MP_open = openMP;
  window.MP_close = function () {};

  // Jangan inject tombol ekstra — sudah ada di index.html (#mp-topbar-btn)
  console.log('[Marketplace] stub · satu tombol di header ✅');
})();
