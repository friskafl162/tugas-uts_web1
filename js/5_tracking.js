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