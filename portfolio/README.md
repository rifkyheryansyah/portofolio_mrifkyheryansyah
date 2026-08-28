# Portofolio Digital — LK 2 Refleksi Pengalaman Belajar

Situs statis (HTML/CSS/JS murni, tanpa proses build) untuk portofolio
digital PPG. Berisi refleksi 4C dan analisis artefak pembelajaran untuk
6 mata kuliah Semester I.

## Struktur file

```
index.html      -> struktur halaman
styles.css      -> semua styling
app.js          -> logika render kartu mata kuliah + interaksi
data.js         -> ISI TEKS refleksi tiap mata kuliah (edit di sini)
public/logos/   -> logo Untirta, PPG, Kemendikdasmen Ramah, Pendidikan Bermutu
```

## Cara mengedit isi

Buka `data.js`. Setiap mata kuliah adalah satu objek di dalam array
`COURSES`, dengan struktur:

```js
{
  id: "slug-unik",
  ring: "01",
  name: "Nama Mata Kuliah",
  tagline: "Satu kalimat ringkas",
  reflection: [
    { tag: "Connection", q: "Pertanyaan...", a: "Jawaban..." },
    { tag: "Challenge",  q: "...", a: "..." },
    { tag: "Concept",    q: "...", a: "..." },
    { tag: "Change",     q: "...", a: "..." }
  ],
  artifact: { what: "...", why: "...", part: "..." }
}
```

Ganti teksnya sesuai kebutuhan, simpan, refresh browser — tidak perlu
build/compile apa pun.

Untuk mengganti nama, program studi, atau email kontak, cari langsung di
`index.html` (bagian `.hero-meta` dan `#kontak`).

## Menjalankan di lokal

Cukup buka `index.html` langsung di browser, atau jalankan server statis
sederhana:

```bash
npx serve .
```

## Deploy ke Vercel

**Opsi A — lewat GitHub (disarankan):**
1. Unggah folder ini ke repository GitHub baru.
2. Buka [vercel.com](https://vercel.com) → **Add New Project** → pilih
   repository tersebut.
3. Framework Preset: pilih **Other** (situs ini statis, tanpa build step).
4. Klik **Deploy**.

**Opsi B — lewat Vercel CLI:**
```bash
npm i -g vercel
cd portfolio
vercel
```
Ikuti instruksi di terminal, lalu `vercel --prod` untuk publish ke domain
produksi.

**Opsi C — drag & drop:**
Di dashboard Vercel, pilih **Add New Project → Deploy** lalu seret folder
ini ke area upload.

Setelah deploy, salin URL yang diberikan Vercel (mis.
`https://nama-proyek.vercel.app`) untuk dikumpulkan sebagai tautan
portofolio digital LK 2.
