// data.js - dummy data
const dataKatalogBuku = [
  {
    id: 1,
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    stok: 10,
    harga: 75000,
    gambar: "laskar-pelangi.jpg"
  },
  {
    id: 2,
    judul: "Filosofi Kopi",
    penulis: "Dee Lestari",
    stok: 8,
    harga: 65000,
    gambar: "filosofi-kopi.jpg"
  },
  {
    id: 3,
    judul: "Dilan 1990",
    penulis: "Pidi Baiq",
    stok: 15,
    harga: 55000,
    gambar: "dilan 1990.jpg"
  },
  {
    id: 4,
    judul: "Atomic Habits",
    penulis: "James Clear",
    stok: 5,
    harga: 120000,
    gambar: "atomic-habits.jpg"
  },
  {id: 5,
    judul: "The Alchemist",
    penulis: "Paulo Coelho",
    stok: 7,
    harga: 90000,
    gambar: "the-achemist.jpg"
  }
]

const dataOrders = [
  { doNumber: 'DO-1001', nama: 'Siti Nur', alamat: 'Jakarta', tanggalKirim: '2025-10-25', ekspedisi: 'JNE', paket: 'Reguler', total: 225000, status: 'Dikirim' },
  { doNumber: 'DO-1002', nama: 'Budi Santoso', alamat: 'Bandung', tanggalKirim: '2025-10-28', ekspedisi: 'TIKI', paket: 'Express', total: 155000, status: 'Dalam Proses' }
];

// Simple credentials for demo
const credentials = { email: 'user@test.com', password: '123456' };