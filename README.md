| Nama                     | Kelas    | NIM       | Mata Kuliah           | Ujian |
|---------------------------|----------|------------|------------------------|--------|
| Friska Pebriana Lestari   | TI.24.A1 | 312410160  | Pemrograman Web 1      | UTS    |

## Index HTML
```` html
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Toko Buku Online</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    /* Sedikit tambahan style khusus splash */
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #ffe4ec, #e0f7ff, #eaffea);
      font-family: 'Poppins', sans-serif;
      overflow: hidden;
    }

    .splash {
      text-align: center;
      animation: fadeIn 1.5s ease-in-out;
    }

    .splash h1 {
      font-size: 2rem;
      color: #555;
      margin-bottom: 8px;
    }

    .splash p {
      color: #777;
      margin-bottom: 20px;
    }

    .splash button {
      background: linear-gradient(135deg, #fddde6, #d5ecff);
      border: none;
      border-radius: 12px;
      padding: 10px 20px;
      font-size: 1rem;
      cursor: pointer;
      font-weight: 600;
      transition: transform 0.1s, box-shadow 0.2s;
    }

    .splash button:hover {
      box-shadow: 0 4px 14px rgba(0,0,0,0.1);
      transform: translateY(-1px);
    }

    @keyframes fadeIn {
      from {opacity: 0;}
      to {opacity: 1;}
    }
  </style>
</head>
<body>
  <div class="splash">
    <h1>📚 Selamat Datang di Toko Buku Online</h1>
    <p>Temukan buku favoritmu dengan nuansa pastel yang lembut 💕</p>
    <button onclick="window.location.href='2_login.html'">Masuk Sekarang</button>
  </div>

  <script>
    // Auto redirect ke login.html setelah 3 detik
    setTimeout(() => {
      window.location.href = "2_login.html";
    }, 3000);
  </script>
</body>
</html>
````

## Login HTML
```` html
<!doctype html;>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Login - Bookstore Pastel</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="card" style="max-width:520px;margin:40px auto;">
      <h2>Welcome to Bookstore</h2>
      <p class="small">Masuk pakai akun demo: <strong>user@test.com</strong> / <strong>123456</strong></p>
      <div class="form-group">
        <label>Email</label>
        <input id="email" class="input" type="email" placeholder="you@email.com" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input id="password" class="input" type="password" placeholder="password" />
      </div>
      <div style="display:flex;gap:8px;justify-content:flex-end;">
        <button id="forgotBtn" class="btn">Lupa Password</button>
        <button id="registerBtn" class="btn">Daftar</button>
        <button id="loginBtn" class="btn primary">Login</button>
      </div>
    </div>
  </div>

  <div id="modal" style="display:none" class="modal">
    <div class="card">
      <h3 id="modalTitle">Modal</h3>
      <p id="modalBody" class="small"></p>
      <div style="text-align:right;margin-top:12px">
        <button id="closeModal" class="btn">Tutup</button>
      </div>
    </div>
  </div>

  <script src="js/data.js"></script>
  <script src="js/1_login.js"></script>
</body>
</html>
````
## Login JS
```` javascript
// 1_login.js
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

function showModal(title, body){
  modalTitle.textContent = title;
  modalBody.textContent = body;
  modal.style.display = 'flex';
}
closeModal.onclick = ()=> modal.style.display = 'none';

document.getElementById('forgotBtn').onclick = ()=> showModal('Lupa Password', 'Silakan hubungi admin@bookstore.test untuk reset password.');
document.getElementById('registerBtn').onclick = ()=> showModal('Daftar', 'Form pendaftaran sementara tidak aktif.');

document.getElementById('loginBtn').onclick = ()=>{
  const email = document.getElementById('email').value.trim();
  const pass = document.getElementById('password').value.trim();
  if(!email || !pass){ alert('Email/password harus diisi'); return; }
  if(email === credentials.email && pass === credentials.password){
    // success -> redirect ke dashboard
    window.location.href = '3_dashboard.html';
  } else {
    alert('email/password yang anda masukkan salah');
  }
}
````

## Dashboard html
```` html
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Dashboard - Bookstore Pastel</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="header">
      <div>
        <div class="greeting" id="greeting">Halo</div>
        <div class="small">Selamat datang di toko buku pastel</div>
      </div>
      <div class="nav">
        <a class="btn" href="4_stok.html">Katalog</a>
        <a class="btn" href="6_tracking.html">Tracking</a>
        <a class="btn" href="5_checkout.html">Pemesanan</a>
      </div>
    </div>

    <!-- Banner -->
    <div class="card" style="margin-top:20px;background:linear-gradient(90deg,#f6c7d7,#c7e8f6);color:#333;text-align:center;">
      <h2>📚 Welcome to Bookstore Pastel</h2>
      <p>Nikmati pengalaman belanja buku dengan nuansa pastel yang calming!</p>
    </div>

    <!-- Katalog -->
    <div class="card" style="margin-top:20px">
      <h3>📖 Koleksi Buku Kami</h3>
      <div id="bookList" style="display:flex;flex-wrap:wrap;gap:16px;margin-top:10px"></div>
    </div>

    <div class="footer">Bookstore Pastel • UTS Pemrograman Web</div>
  </div>

  <script src="js/data.js"></script>
  <script src="js/2_dashboard.js"></script>
</body>
</html>
````

## Dashboard JS
```` javascript
// greeting
const greetingEl = document.getElementById('greeting');
const h = new Date().getHours();
let greet = 'Halo';
if(h < 11) greet = 'Selamat pagi';
else if(h < 15) greet = 'Selamat siang';
else greet = 'Selamat sore';
greetingEl.textContent = `${greet}, Halo Friska`;

// render katalog
const bookList = document.getElementById('bookList');

function renderBooks() {
  if (!Array.isArray(dataKatalogBuku)) return;
  dataKatalogBuku.forEach(book => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '180px';
    card.style.textAlign = 'center';
    card.innerHTML = `
        <img src="${book.gambar}" style="width:100%;border-radius:10px;height:230px;object-fit:cover;">
        <h4>${book.judul}</h4>
        <p class="small">${book.penulis}</p>
        <p class="small">Rp ${book.harga.toLocaleString()}</p>
        <button class="btn primary" onclick="beliBuku('${book.judul}')">Beli</button>
        `;
    bookList.appendChild(card);
  });
}

function beliBuku(judul) {
  alert(`Buku "${judul}" ditambahkan ke pesanan!`);
  window.location.href = '5_checkout.html';
}

renderBooks();
````

## Stok HTML
``` html
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Stok - Bookstore</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Katalog Buku</h2>
      <div class="nav">
        <a class="btn" href="3_dashboard.html">Dashboard</a>
        <a class="btn" href="5_checkout.html">Pemesanan</a>
      </div>
    </div>

    <div class="card" style="margin-top:12px">
      <h3>Daftar Buku</h3>
      <table class="table" id="tabelBuku">
        <thead>
          <tr><th>ID</th><th>Judul</th><th>Penulis</th><th>Stok</th><th>Harga</th><th>Aksi</th></tr>
        </thead>
        <tbody></tbody>
      </table>

      <h4 style="margin-top:12px">Tambah Stok Manual</h4>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="newJudul" class="input" placeholder="Judul" />
        <input id="newPenulis" class="input" placeholder="Penulis" />
        <input id="newStok" class="input" type="number" placeholder="Stok" />
        <input id="newHarga" class="input" type="number" placeholder="Harga" />
        <button id="addBtn" class="btn primary">Tambah</button>
      </div>
    </div>
  </div>

  <script src="js/data.js"></script>
  <script src="js/3_stok.js"></script>
</body>
</html>
```

## Stok JS
``` javascript
const tbody = document.querySelector('#tabelBuku tbody');
function render(){
  tbody.innerHTML = '';
  dataKatalogBuku.forEach(item =>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.judul}</td>
      <td>${item.penulis}</td>
      <td>${item.stok}</td>
      <td>Rp ${item.harga.toLocaleString()}</td>
      <td><button class="btn" data-id="${item.id}">Edit</button></td>
    `;
    tbody.appendChild(tr);
  });
}
render();

// add new
document.getElementById('addBtn').onclick = ()=>{
  const judul = document.getElementById('newJudul').value.trim();
  const penulis = document.getElementById('newPenulis').value.trim();
  const stok = parseInt(document.getElementById('newStok').value) || 0;
  const harga = parseInt(document.getElementById('newHarga').value) || 0;
  if(!judul || !penulis){ alert('Judul dan penulis harus diisi'); return; }
  const id = dataKatalogBuku.length ? Math.max(...dataKatalogBuku.map(x=>x.id))+1 : 1;
  dataKatalogBuku.push({ id, judul, penulis, stok, harga });
  render();
  // clear
  document.getElementById('newJudul').value='';
  document.getElementById('newPenulis').value='';
  document.getElementById('newStok').value='';
  document.getElementById('newHarga').value='';
}
```

##Checkout HTML
```html
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Checkout - Bookstore</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Pemesanan</h2>
      <div class="nav">
        <a class="btn" href="3_dashboard.html">Dashboard</a>
        <a class="btn" href="4_stok.html">Stok</a>
      </div>
    </div>

    <div class="card" style="margin-top:12px">
      <h3>Form Pemesanan</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        <div>
          <div class="form-group"><label>Nama</label><input id="nama" class="input"></div>
          <div class="form-group"><label>Alamat</label><input id="alamat" class="input"></div>
          <div class="form-group"><label>Nomor HP</label><input id="hp" class="input"></div>
          <div class="form-group"><label>Delivery Order</label><input id="do" class="input" placeholder="DO-XXXX"></div>
        </div>
        <div>
          <div class="form-group"><label>Pilih Buku</label>
            <select id="pilihBuku" class="input"></select>
          </div>
          <div class="form-group"><label>Jumlah</label><input id="qty" class="input" type="number" value="1"></div>
          <div class="form-group"><label>Ekspedisi</label><input id="ekspedisi" class="input" placeholder="JNE/TIKI"/></div>
          <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:8px">
            <button id="addOrder" class="btn primary">Tambah Pesanan</button>
          </div>
        </div>
      </div>

      <h4 style="margin-top:12px">Daftar Pesanan</h4>
      <table class="table" id="ordersTbl"><thead><tr><th>DO</th><th>Nama</th><th>Buku</th><th>Qty</th><th>Total</th></tr></thead><tbody></tbody></table>
    </div>

  </div>

  <script src="js/data.js"></script>
  <script src="js/4_checkout.js"></script>
</body>
</html>
```

## Checkout JS
``` javascript
const select = document.getElementById('pilihBuku');
const tbodyOrders = document.querySelector('#ordersTbl tbody');
const orders = [];

function initBuku() {
  select.innerHTML = '';
  dataKatalogBuku.forEach(b => {
    const opt = document.createElement('option');
    opt.value = b.id;
    opt.textContent = `${b.judul} - Rp ${b.harga.toLocaleString()}`;
    select.appendChild(opt);
  });
}
initBuku();

function renderOrders() {
  tbodyOrders.innerHTML = '';
  orders.forEach((o, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${o.do}</td>
      <td>${o.nama}</td>
      <td>${o.buku}</td>
      <td>${o.qty}</td>
      <td>Rp ${o.total.toLocaleString()}</td>
      <td><button class="btn" onclick="batalkan(${i})">Batalkan</button></td>
    `;
    tbodyOrders.appendChild(tr);
  });
}

// fungsi buat generate nomor DO otomatis
function generateDO() {
  return `DO-${Math.floor(Math.random() * 9000) + 1000}`;
}

// isi otomatis kolom DO saat halaman dibuka
document.getElementById('do').value = generateDO();
document.getElementById('addOrder').onclick = () => {
  const nama = document.getElementById('nama').value.trim();
  const alamat = document.getElementById('alamat').value.trim();
  const doNum = document.getElementById('do').value.trim() || `DO-${Math.floor(Math.random() * 9000) + 1000}`;
  const bukuId = parseInt(select.value);
  const qty = parseInt(document.getElementById('qty').value) || 1;

  if (!nama) {
    alert('Nama harus diisi');
    return;
  }

  const buku = dataKatalogBuku.find(b => b.id === bukuId);
  const total = buku.harga * qty;

  orders.push({ do: doNum, nama, alamat, buku: buku.judul, qty, total });
  renderOrders();

  // Simpan juga ke dataOrders untuk tracking
  dataOrders.push({
    doNumber: doNum,
    nama,
    alamat,
    tanggalKirim: new Date().toISOString().slice(0, 10),
    ekspedisi: document.getElementById('ekspedisi').value || 'JNE',
    paket: 'Reguler',
    total,
    status: 'Dalam Proses'
  });

  // Simpan ke localStorage biar bisa dilacak di tracking
  localStorage.setItem('orders',JSON.stringify(dataOrders));

  // 🔔 Popup info DO
  alert(`Pesanan berhasil ditambahkan!\nNomor Delivery Order kamu: ${doNum}\nGunakan nomor ini untuk tracking pengiriman.`);

  // Reset form
  document.getElementById('nama').value = '';
  document.getElementById('alamat').value = '';
  document.getElementById('do').value = '';
  document.getElementById('qty').value = 1;
};

function batalkan(index) {
  const konfirmasi = confirm('Yakin mau batalkan pesanan ini?');
  if (konfirmasi) {
    const deleted = orders.splice(index, 1)[0];
    // hapus juga dari dataOrders biar konsisten
    const idx = dataOrders.findIndex(d => d.doNumber === deleted.do);
    if (idx !== -1) dataOrders.splice(idx, 1);
    renderOrders();
  }
}
```

## Tracking HTML
``` html
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Tracking - Bookstore</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Tracking Pengiriman</h2>
      <div class="nav">
        <a class="btn" href="3_dashboard.html">Dashboard</a>
        <a class="btn" href="4_stok.html">Stok</a>
      </div>
    </div>

    <div class="card" style="margin-top:12px">
      <div style="display:flex;gap:8px">
        <input id="doInput" class="input" placeholder="Masukkan Nomor DO (contoh: DO-1001)">
        <button id="cariBtn" class="btn primary">Cari</button>
      </div>

      <div id="result" style="margin-top:12px"></div>
    </div>
  </div>

  <script src="js/data.js"></script>
  <script src="js/5_tracking.js"></script>
</body>
</html>
```

## Tracking JS
``` javascript
const doInput = document.getElementById('doInput');
const cariBtn = document.getElementById('cariBtn');
const result = document.getElementById('result');

// ambil dataOrders dari localStorage kalau ada
const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
if (savedOrders.length > 0) {
  dataOrders.length = 0; // hapus isi lama
  dataOrders.push(...savedOrders);
}

cariBtn.onclick = ()=>{
  const q = doInput.value.trim();
  if(!q){ alert('Masukkan nomor DO'); return; }
  const found = dataOrders.find(d => d.doNumber.toLowerCase() === q.toLowerCase());
  if(!found){ result.innerHTML = '<p class="small">Data tidak ditemukan.</p>'; return; }
  result.innerHTML = `
    <h4>Nama: ${found.nama}</h4>
    <p class="small">Ekspedisi: ${found.ekspedisi} • Paket: ${found.paket} • Tanggal: ${found.tanggalKirim}</p>
    <p class="small">Total: Rp ${found.total.toLocaleString()}</p>
    <div style="margin-top:8px">
      <div class="progress"><span style="width:${found.status==='Dikirim'?90:found.status==='Dalam Proses'?50:20}% ;background:linear-gradient(90deg,var(--accent),var(--accent-2));"></span></div>
      <p class="small">Status: <strong>${found.status}</strong></p>
    </div>
  `;
}
```

## Order HTML
``` html
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Laporan Pesanan - Bookstore Pastel</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Laporan Pesanan</h2>
      <div class="nav">
        <a class="btn" href="3_dashboard.html">Dashboard</a>
        <a class="btn" href="4_checkout.html">Checkout</a>
        <a class="btn" href="6_tracking.html">Tracking</a>
      </div>
    </div>

    <div class="card" style="margin-top:20px">
      <h3>📦 Daftar Pesanan</h3>
      <table class="table" id="orderTable">
        <thead>
          <tr>
            <th>No DO</th>
            <th>Nama Pemesan</th>
            <th>Alamat</th>
            <th>Ekspedisi</th>
            <th>Paket</th>
            <th>Tanggal Kirim</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>

    <div class="footer">Bookstore Pastel • Laporan Pesanan</div>
  </div>

  <script src="js/data.js"></script>
  <script>
    const tbody = document.querySelector('#orderTable tbody');
    dataOrders.forEach(order => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${order.doNumber}</td>
        <td>${order.nama}</td>
        <td>${order.alamat}</td>
        <td>${order.ekspedisi}</td>
        <td>${order.paket}</td>
        <td>${order.tanggalKirim}</td>
        <td>Rp ${order.total.toLocaleString()}</td>
        <td>${order.status}</td>
      `;
      tbody.appendChild(tr);
    });
  </script>
</body>
</html>
```

## Tujuan Pembuatan Website
website ini dibuat untuk memenuhi tugas UTS pemrograman web. isinya tentang toko buku online. di dalam website ini pengguna dapat melihat daftar buku, menmbah pesanan, tracking pesanan, dan mengatur stok buku juga

## Alur Pikir
  1. pertama saya membuat halamannya dulu. ada login, dashboard, katalog, checkout/pemesanan, dan tracking.
  2. setelah itu saya juga menyipkan datanya di satu file bernama data.js, disitu ada data buku dan data pesanan, semuanya disimpan dalam bentuk array JSON
  3.  
## Kesimpulan
intinya saya membuat website ini untuk bisa menunjukan fungsi dasar dari HTML buat struktur, CSS buat tampilan, dan JS untuk logika interaktifnya.
