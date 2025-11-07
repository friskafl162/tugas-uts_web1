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