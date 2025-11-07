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