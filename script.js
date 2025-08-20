// === MENU NAVBAR ===
function toggleMenu(){
  document.getElementById('nav').classList.toggle('show');
}

// === LIGHTBOX ===
function openLightbox(src){
  const lb=document.getElementById('lightbox');
  document.getElementById('lightbox-img').src=src;
  lb.style.display='flex';
}

function closeLightbox(){
  document.getElementById('lightbox').style.display='none';
}

// === FOOTER TAHUN OTOMATIS ===
document.getElementById('year').textContent = new Date().getFullYear();

// === ANIMASI FADE-IN DENGAN OBSERVER ===
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('reveal');
      e.target.style.opacity = 1;        // muncul
      e.target.style.transform = 'none'; // kembali ke posisi normal
    }
  })
},{threshold:.12});

// Atur elemen sebelum animasi muncul
document.querySelectorAll('.card, .grid-item, .about-photo img, .hero-image img').forEach(el=>{
  el.style.opacity = 0;                       // hilang dulu
  el.style.transform = 'translateY(20px)';    // geser sedikit ke bawah
  el.style.transition = 'all .6s ease';       // animasi halus
  observer.observe(el);                       // daftarkan ke observer
});

