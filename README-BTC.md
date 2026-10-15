# Dompetku + menu Bitcoin (BTC)

Paket ini menambahkan menu Bitcoin ke Dompetku dengan gaya Liquid Glass, saldo blockchain, alamat penerimaan + QR, estimasi fee, riwayat yang dapat diklik, dan tampilan kurs mengikuti pilihan mata uang aplikasi.

## File
- `index.html`, `style.css`: tampilan Dompetku dengan panel BTC.
- `btc.js`: modul wallet Bitcoin browser.
- File JavaScript lain: modul Dompetku yang diunggah bersama.

## Integrasi
1. Cadangkan repositori Dompetku terlebih dahulu.
2. Unggah/replace file dari paket ini ke folder yang sama dengan file proyek lama.
3. Pertahankan aset dan modul lama yang tidak ada di paket, khususnya `logo.png` dan `marketplace.js` jika proyek Anda menggunakannya.
4. Jalankan melalui HTTPS (GitHub Pages cocok) karena Web Crypto memerlukan secure context.
5. Buka menu ₿ BTC. Buat kata sandi khusus minimal 10 karakter, lalu simpan recovery phrase secara offline.

## Penting — baca sebelum menggunakan uang sungguhan
- Modul ini terhubung ke **Bitcoin Mainnet**. Jangan kirim BTC sungguhan sebelum diuji dan diaudit oleh pengembang yang memahami keamanan dompet kripto.
- Dependensi kriptografi dimuat dari esm.sh saat runtime; QR memakai pustaka yang sudah dirujuk pada `index.html`; data blockchain menggunakan Blockstream Esplora; kurs memakai CoinGecko. Ketersediaan layanan pihak ketiga dapat berubah.
- Recovery phrase adalah kunci penguasaan dana. Siapa pun yang memilikinya dapat mengambil BTC. Jangan screenshot, kirim ke chat, atau unggah frasa itu.
- Enkripsi lokal tidak melindungi perangkat yang sudah terinfeksi malware. Jangan gunakan kata sandi Dompetku utama untuk BTC.
- Estimasi fee bisa berubah. Periksa alamat, jumlah, dan fee sebelum menyetujui pengiriman. Transaksi Bitcoin yang sudah disiarkan tidak bisa dibatalkan.
- Paket ini belum diaudit keamanan dan bukan layanan kustodian atau jaminan keamanan finansial.
- Sebagian file/asset lama (mis. `logo.png`, `marketplace.js`) tidak ikut diunggah pada percakapan ini; pertahankan file asli tersebut di repositori Anda.
