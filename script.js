const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>{nav.classList.toggle('show');menuBtn.textContent=nav.classList.contains('show')?'×':'☰'});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('show');menuBtn.textContent='☰'}));

document.querySelectorAll('.learning-item').forEach(item=>{
  item.addEventListener('click',()=>{
    document.querySelectorAll('.learning-item').forEach(x=>x.classList.remove('active'));
    item.classList.add('active');
  });
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}});
},{threshold:.12});
document.querySelectorAll('.section-title,.about-grid,.stats-row,.learning-item,.learning-panel,.project,.timeline article,.final-section').forEach(el=>{
  el.classList.add('reveal');observer.observe(el);
});
