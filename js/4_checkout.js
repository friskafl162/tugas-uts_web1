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