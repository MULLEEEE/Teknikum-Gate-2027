const loader = document.getElementById('loader');
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');
const backTop = document.getElementById('back-top');

window.addEventListener('load', () => setTimeout(() => loader.classList.add('loaded'), 500));
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuToggle.innerHTML = nav.classList.contains('open') ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const eventDate = new Date('2026-12-12T10:00:00+01:00').getTime();
function updateCountdown() {
  const distance = Math.max(0, eventDate - Date.now());
  const values = {
    days: Math.floor(distance / 86400000),
    hours: Math.floor(distance / 3600000) % 24,
    minutes: Math.floor(distance / 60000) % 60,
    seconds: Math.floor(distance / 1000) % 60
  };
  Object.entries(values).forEach(([unit, value]) => {
    const element = document.querySelector(`[data-unit="${unit}"]`);
    element.textContent = String(value).padStart(2, '0');
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

const sections = document.querySelectorAll('main section[id]');
const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    document.querySelectorAll('.main-nav a').forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  }
}), { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => navObserver.observe(section));
window.addEventListener('scroll', () => backTop.classList.toggle('show', window.scrollY > 500));
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const seatGrid = document.getElementById('seats');
const seatInput = document.getElementById('seat-input');
const selectedSeatLabel = document.getElementById('selected-seat');
const bookingForm = document.getElementById('booking-form');
const bookingMessage = document.getElementById('booking-message');
const swishButton = document.getElementById('swish-button');
const swishNumber = '0729292549';
const bookingResetVersion = 'all-seats-available-2026-08-25';
if (localStorage.getItem('teknikumBookingReset') !== bookingResetVersion) {
  localStorage.removeItem('teknikumBookings');
  localStorage.setItem('teknikumBookingReset', bookingResetVersion);
}
const storedBookings = JSON.parse(localStorage.getItem('teknikumBookings') || '[]');
const reservedSeats = new Set(storedBookings.map(booking => booking.seat));
let chosenSeat = '';

function selectSeat(seat) {
  document.querySelectorAll('.seat.selected').forEach(item => item.classList.remove('selected'));
  seat.classList.add('selected');
  chosenSeat = seat.dataset.seat;
  seatInput.value = chosenSeat;
  selectedSeatLabel.textContent = chosenSeat;
}

function createSeat(seatNumber) {
  const seat = document.createElement('button');
  const seatName = `A${seatNumber}`;
  seat.type = 'button';
  seat.className = 'seat';
  seat.textContent = seatNumber;
  seat.dataset.seat = seatName;

  if (reservedSeats.has(seatName)) {
    seat.classList.add('reserved');
    seat.disabled = true;
  }

  seat.addEventListener('click', () => selectSeat(seat));
  return seat;
}

for (let seatNumber = 1; seatNumber <= 100; seatNumber += 1) {
  seatGrid.appendChild(createSeat(seatNumber));
}

bookingForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!chosenSeat) {
    bookingMessage.textContent = 'Välj en sittplats på kartan först.';
    bookingMessage.style.color = '#c03d5d';
    return;
  }

  const data = Object.fromEntries(new FormData(event.target));
  storedBookings.push(data); localStorage.setItem('teknikumBookings', JSON.stringify(storedBookings));
  bookingMessage.textContent = `Tack för din bokning, ${data.firstName}! Plats ${chosenSeat} är reserverad.`;
  if (swishNumber) {
    const paymentMessage = `Teknikum Gate - ${chosenSeat} - ${data.firstName} ${data.lastName}`;
    swishButton.href = `swish://payment?${new URLSearchParams({ payee: swishNumber, message: paymentMessage })}`;
    window.location.href = swishButton.href;
  } else {
    bookingMessage.textContent += ' Lägg in arrangörens Swish-nummer i script.js för att öppna Swish.';
  }
  const chosen = document.querySelector(`[data-seat="${chosenSeat}"]`); chosen.classList.remove('selected'); chosen.classList.add('reserved'); chosen.disabled = true;
  event.target.reset(); chosenSeat = ''; seatInput.value = ''; selectedSeatLabel.textContent = 'Ingen vald';
});

document.querySelectorAll('.rule-tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.rule-tab').forEach(item => item.classList.remove('active')); tab.classList.add('active');
  const rules = {
    allmant: ['Respektera alla deltagare', 'Ingen mobbning eller diskriminering', 'Följ arrangörernas instruktioner'],
    utrustning: ['Ta med egen dator och skärm', 'Ta med egna kablar', 'Märk din utrustning'],
    natverk: ['Ingen hacking eller DDoS', 'Ingen olaglig nedladdning', 'Visa hänsyn till nätverket'],
    beteende: ['Ingen skadegörelse', 'Inget fusk', 'Ingen störning av andra lag']
  };
  document.getElementById('rule-content').innerHTML = rules[tab.dataset.rule].map(rule => `<li>${rule}</li>`).join('');
}));

document.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', () => {
  const lightbox = document.getElementById('lightbox'); lightbox.querySelector('img').src = item.dataset.image; lightbox.classList.add('open');
}));
document.querySelector('.lightbox button').addEventListener('click', () => document.getElementById('lightbox').classList.remove('open'));
document.getElementById('lightbox').addEventListener('click', event => { if (event.target.id === 'lightbox') event.currentTarget.classList.remove('open'); });

document.querySelector('.theme-toggle').addEventListener('click', event => {
  document.body.classList.toggle('light-mode');
  event.currentTarget.innerHTML = document.body.classList.contains('light-mode') ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
});
document.querySelector('.contact-form').addEventListener('submit', event => { event.preventDefault(); event.target.querySelector('.button').innerHTML = 'Meddelande skickat <i class="fa-solid fa-check"></i>'; event.target.reset(); });
