const loader = document.getElementById('loader');
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');
const backTop = document.getElementById('back-top');
const languageToggle = document.getElementById('language-toggle');

const translations = {
  'LOADING EVENT': 'LADDAR EVENTET',
  'Home': 'Hem', 'About': 'Om eventet', 'Schedule': 'Schema', 'Tournaments': 'Turneringar',
  'Book a seat': 'Boka plats', 'Rules': 'Regler', 'Contact': 'Kontakt', 'Main navigation': 'Huvudnavigation',
  'Teknikum Gate home': 'Teknikum Gate startsida', 'Toggle theme': 'Byt tema', 'Open menu': 'Öppna meny',
  'Lock In': 'Boka nu', 'LOCK IN': 'BOKA NU', 'LOCK IN.': 'FOKUSERA.',
  'PLAY HARD.': 'SPELA HÅRT.', 'PLAY HARD. STAY HUMAN.': 'SPELA HÅRT. VAR SCHYSST.',
  'TEKNIKUM GATE PRESENTS': 'TEKNIKUM GATE PRESENTERAR',
  '24 hours of gaming, tournaments and community.': '24 timmar gaming, turneringar och gemenskap.',
  'Växjö’s ultimate LAN experience awaits.': 'Växjös bästa LAN-upplevelse väntar.', 'Explore the event': 'Upptäck eventet',
  'DATE': 'DATUM', 'DEC 12–13, 2027': '12–13 DEC 2027', 'LOCATION': 'PLATS', 'TEKNIKUM, VÄXJÖ': 'TEKNIKUM, VÄXJÖ',
  'SEATS LEFT': 'PLATSER KVAR', 'NON-STOP': 'UTAN AVBROTT', 'SCROLL TO EXPLORE': 'SCROLLA FÖR ATT UTFORSKA',
  'EVENT': 'EVENEMANG', 'COUNTDOWN': 'NEDRÄKNING', 'DAYS': 'DAGAR', 'HOURS': 'TIMMAR', 'MINUTES': 'MINUTER', 'SECONDS': 'SEKUNDER',
  'MORE THAN A LAN': 'MER ÄN ETT LAN', 'YOUR GAME.': 'DITT SPEL.', 'YOUR ARENA.': 'DIN ARENA.',
  'Teknikum Gate is a meeting place for gamers, creators and friends. A weekend where the screens get bigger, the matches get more intense, and new teammates are around every corner.': 'Teknikum Gate är en mötesplats för gamers, kreatörer och vänner. En helg där skärmarna blir större, matcherna hetare och nya lagkamrater väntar runt varje hörn.',
  'Be part of it': 'Bli en del av det', 'SEATS': 'PLATSER', 'TOURNAMENTS': 'TURNERINGAR', 'SEK IN PRIZES': 'KR I PRISPOTTEN', 'HOURS OF GAMING': 'TIMMAR GAMING',
  'STAY ON TOP OF THE ACTION': 'HÅLL KOLL PÅ ACTIONEN', 'SCHEDULE': 'SCHEMA',
  'From the first boot-up to the final match, there’s always something happening.': 'Från första uppstarten till sista finalen händer det alltid något.',
  'From doors opening on Friday to the event ending on Sunday, there’s always something happening.': 'Från att dörrarna öppnas på fredag till att eventet avslutas på söndag händer det alltid något.',
  'Friday · 20:00': 'Fredag · 20:00', 'Friday · 20:00–22:30': 'Fredag · 20:00–22:30', 'Friday · 23:00': 'Fredag · 23:00',
  'After the tournament': 'Efter turneringen', 'Saturday · 14:00': 'Lördag · 14:00', 'Saturday · 18:00': 'Lördag · 18:00',
  'Free play until the winners are announced at 21:00.': 'Fri gaming fram till att vinnarna tillkännages kl. 21:00.',
  'Saturday · 21:00': 'Lördag · 21:00', 'After the announcement': 'Efter prisutdelningen', 'Sunday · 15:00': 'Söndag · 15:00',
  'Winners announced': 'Vinnarna tillkännages', 'Join us as we announce the tournament winners.': 'Var med när vi tillkännager turneringarnas vinnare.',
  'Keep playing until the event ends on Sunday.': 'Fortsätt spela tills eventet avslutas på söndag.', 'Event ends': 'Eventet avslutas',
  'Thanks for being part of Teknikum Gate!': 'Tack för att du var med på Teknikum Gate!',
  'CS2 Tournament · 2v2': 'CS2-turnering · 2 mot 2', 'CS2 Tournament · 1v1': 'CS2-turnering · 1 mot 1',
  'Bring your teammate and compete for the win.': 'Ta med en lagkamrat och tävla om segern.', 'Take on your opponents solo.': 'Möt dina motståndare på egen hand.',
  'Team up for another 2v2 tournament.': 'Samla laget för ännu en 2 mot 2-turnering.', 'Play freely until the next tournament.': 'Spela fritt fram till nästa turnering.',
  'Doors open': 'Dörrarna öppnar', 'Check in, find your seat and get settled.': 'Checka in, hitta din plats och gör dig hemmastadd.',
  'Free play': 'Fri gaming', 'Warm up, meet new people and play your way.': 'Värm upp, träffa nya vänner och spela fritt.',
  'CS2 Tournament': 'CS2-turnering', 'Group stages kick off on the main stage.': 'Gruppspelet drar igång på huvudscenen.',
  'EA FC Tournament': 'EA FC-turnering', '1v1. No excuses. Just goals.': '1 mot 1. Inga ursäkter. Bara mål.',
  'Fly high and land hard.': 'Flyg högt och landa hårt.', 'Quiz & night challenges': 'Quiz och nattutmaningar',
  'Test your gaming knowledge and keep the energy up.': 'Testa dina spelkunskaper och håll energin uppe.',
  'Finals & awards ceremony': 'Finaler och prisutdelning', 'The final match. The loudest applause.': 'Den sista matchen. De största applåderna.',
  'PLAY FOR GLORY': 'SPELA OM ÄRAN', 'CHOOSE YOUR': 'VÄLJ DIN', 'FIGHT.': 'UTMANING.', 'Register your team': 'Anmäl ditt lag',
  'PRIZE POOL': 'PRISPOTT', 'PRIZE': 'PRIS', 'STARTS': 'STARTAR', 'TEAMS': 'LAG', 'TBD': 'EJ FASTSTÄLLT',
  'FORMAT': 'FORMAT', 'DAY': 'DAG', 'Friday': 'Fredag', 'Saturday': 'Lördag',
  'SEAT BOOKING': 'PLATSBOKNING', 'YOUR SPOT.': 'DIN PLATS.', 'First name': 'Förnamn', 'Last name': 'Efternamn',
  'Email': 'E-post', 'Phone': 'Telefon', 'School class': 'Klass', 'Gamer tag': 'Spelnamn', 'Favorite game': 'Favoritspel',
  'Choose a game': 'Välj spel', 'Seat': 'Sittplats', 'Choose on the map': 'Välj på kartan', 'PAYMENT': 'BETALNING',
  'Payment is completed after your booking has been registered.': 'Betalningen slutförs efter att bokningen har registrerats.',
  'The organizer will provide the Swish number and amount before payment.': 'Arrangören meddelar Swishnummer och belopp före betalning.',
  'I agree to the event rules and terms.': 'Jag godkänner eventets regler och villkor.', 'Confirm booking': 'Bekräfta bokning',
  'Open Swish': 'Öppna Swish', 'CHOOSE YOUR SEAT': 'VÄLJ DIN PLATS', 'Available': 'Ledig', 'Reserved': 'Bokad',
  'Selected seat:': 'Vald plats:', 'None selected': 'Ingen vald', 'MAIN STAGE / SCREEN': 'HUVUDSCEN / SKÄRM', 'REWARDS': 'PRISER', 'WIN': 'VINN', 'SOMETHING.': 'NÅGOT.',
  'Gaming keyboard': 'Gamingtangentbord', '1st place': '1:a plats', 'Gaming mouse': 'Gamingmus', '2nd place': '2:a plats',
  'Gift card': 'Presentkort', '3rd place': '3:e plats', 'PLAY FAIR': 'SPELA SCHYSST', 'RULES': 'REGLER', 'ARE RULES.': 'ÄR REGLER.',
  '01 / GENERAL': '01 / ALLMÄNT', '02 / EQUIPMENT': '02 / UTRUSTNING', '03 / NETWORK': '03 / NÄTVERK', '04 / CONDUCT': '04 / BETEENDE',
  'YOU ASK. WE ANSWER.': 'DU FRÅGAR. VI SVARAR.', 'GOOD TO': 'BRA ATT', 'KNOW.': 'VETA.',
  'Do I need to bring my own computer?': 'Måste jag ta med egen dator?',
  'Yes, bring your own computer, monitor, keyboard, mouse and all the cables you need.': 'Ja, ta med egen dator, skärm, tangentbord, mus och alla kablar du behöver.',
  'Is internet available?': 'Finns det internet?', 'We provide stable, high-speed internet to all participants through our local network.': 'Vi erbjuder stabilt och snabbt internet till alla deltagare via vårt lokala nätverk.',
  'Can I sleep at the venue?': 'Kan jag sova på plats?', 'Absolutely. Bring a sleeping bag and sleeping mat. We have a dedicated quiet sleeping area.': 'Absolut. Ta med sovsäck och liggunderlag. Vi har en särskild lugn sovzon.',
  'Is there a kiosk?': 'Finns det en kiosk?', 'Yes, the kiosk is open throughout the event and offers snacks, drinks and light meals.': 'Ja, kiosken är öppen under hela eventet och erbjuder snacks, dryck och enklare mat.',
  'How do I book a seat?': 'Hur bokar jag en plats?', 'Fill in the form above, choose an available seat and confirm your booking.': 'Fyll i formuläret ovan, välj en ledig plats och bekräfta bokningen.',
  'THE VIBE': 'KÄNSLAN', 'INSIDE THE': 'INNE I', 'GATE.': 'GATE.', 'High energy. Long nights. A community that makes every match bigger.': 'Hög energi. Långa nätter. En gemenskap som gör varje match större.',
  '01 / THE SETUP': '01 / GAMINGPLATSEN', '02 / FOCUS': '02 / FOKUS', '03 / AFTER DARK': '03 / EFTER MÖRKRETS INBROTT',
  'Gaming setup with neon lights': 'Gamingdator med neonljus', 'Player at a gaming setup': 'Spelare vid en gamingdator', 'Gaming station with colored lights': 'Gamingplats med färgad belysning',
  'POWERED BY': 'MED STÖD AV', 'OUR': 'VÅRT', 'CREW.': 'GÄNG.', 'HAVE QUESTIONS?': 'HAR DU FRÅGOR?', 'JOIN THE': 'GÅ MED I', 'CONVERSATION.': 'SAMTALET.',
  'Discord server': 'Discord-server', 'Name': 'Namn', 'Your name': 'Ditt namn', 'you@email.com': 'din@email.com', 'Message': 'Meddelande',
  'Write your message...': 'Skriv ditt meddelande...', 'Send message': 'Skicka meddelande', 'DECEMBER 12–13 · VÄXJÖ': '12–13 DECEMBER · VÄXJÖ',
  'All rights reserved.': 'Alla rättigheter förbehållna.', 'Back to top': 'Till toppen', 'Close image': 'Stäng bild',
  'Switch to Swedish': 'Byt till svenska', 'Switch to English': 'Byt till engelska',
  'Please select a seat on the map first.': 'Välj en sittplats på kartan först.',
  'Thank you for your booking,': 'Tack för din bokning,', 'Seat': 'Plats', 'is reserved.': 'är reserverad.',
  'Add the organizer’s Swish number in script.js to open Swish.': 'Lägg in arrangörens Swish-nummer i script.js för att öppna Swish.',
  'Message sent': 'Meddelande skickat'
};

const ruleTranslations = {
  allmant: ['Respektera alla deltagare', 'Ingen mobbning eller diskriminering', 'Följ arrangörernas instruktioner'],
  utrustning: ['Ta med egen dator och skärm', 'Ta med egna kablar', 'Märk din utrustning'],
  natverk: ['Ingen hacking eller DDoS-attacker', 'Ingen olaglig nedladdning', 'Visa hänsyn till nätverket'],
  beteende: ['Skada inte lokalen eller utrustningen', 'Inget fusk', 'Stör inte andra lag']
};
const englishRules = {
  allmant: ['Respect all participants', 'No bullying or discrimination', 'Follow the organizers’ instructions'],
  utrustning: ['Bring your own computer and monitor', 'Bring your own cables', 'Label your equipment'],
  natverk: ['No hacking or DDoS attacks', 'No illegal downloading', 'Use the network responsibly'],
  beteende: ['Do not damage the venue or equipment', 'No cheating', 'Do not disrupt other teams']
};
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
let currentLanguage = localStorage.getItem('teknikumLanguage') === 'sv' ? 'sv' : 'en';

function renderRules() {
  const activeRule = document.querySelector('.rule-tab.active')?.dataset.rule || 'allmant';
  const rules = currentLanguage === 'sv' ? ruleTranslations : englishRules;
  document.getElementById('rule-content').innerHTML = rules[activeRule].map(rule => `<li>${rule}</li>`).join('');
}

function setLanguage(language) {
  currentLanguage = language;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement.closest('script, style')) continue;
    if (!originalText.has(node)) originalText.set(node, node.textContent);
    const source = originalText.get(node);
    const text = source.trim();
    if (!text) continue;
    const translated = language === 'sv' ? translations[text] : text;
    if (translated) node.textContent = source.replace(text, translated);
  }

  document.querySelectorAll('body *').forEach(element => {
    ['aria-label', 'title', 'placeholder', 'alt'].forEach(attribute => {
      if (!element.hasAttribute(attribute)) return;
      let saved = originalAttributes.get(element);
      if (!saved) { saved = {}; originalAttributes.set(element, saved); }
      if (!(attribute in saved)) saved[attribute] = element.getAttribute(attribute);
      const source = saved[attribute];
      element.setAttribute(attribute, language === 'sv' ? (translations[source] || source) : source);
    });
  });

  document.documentElement.lang = language;
  document.querySelector('meta[name="description"]').content = language === 'sv'
    ? 'Teknikum Gate LAN 2027 - 24 timmar gaming, turneringar och gemenskap i Växjö.'
    : 'Teknikum Gate LAN 2027 - 24 hours of gaming, tournaments and community in Växjö.';
  const languageButton = document.getElementById('language-toggle');
  languageButton.textContent = language === 'en' ? 'SV' : 'EN';
  const switchLabel = language === 'en' ? 'Switch to Swedish' : 'Switch to English';
  const localizedSwitchLabel = language === 'sv' ? translations[switchLabel] : switchLabel;
  languageButton.setAttribute('aria-label', localizedSwitchLabel);
  languageButton.title = localizedSwitchLabel;
  localStorage.setItem('teknikumLanguage', language);
  renderRules();
}

languageToggle.addEventListener('click', () => setLanguage(currentLanguage === 'en' ? 'sv' : 'en'));
setLanguage(currentLanguage);

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
    bookingMessage.textContent = currentLanguage === 'sv' ? 'Välj en sittplats på kartan först.' : 'Please select a seat on the map first.';
    bookingMessage.style.color = '#c03d5d';
    return;
  }

  const data = Object.fromEntries(new FormData(event.target));
  storedBookings.push(data); localStorage.setItem('teknikumBookings', JSON.stringify(storedBookings));
  bookingMessage.textContent = currentLanguage === 'sv'
    ? `Tack för din bokning, ${data.firstName}! Plats ${chosenSeat} är reserverad.`
    : `Thank you for your booking, ${data.firstName}! Seat ${chosenSeat} is reserved.`;
  if (swishNumber) {
    const paymentMessage = `Teknikum Gate - ${chosenSeat} - ${data.firstName} ${data.lastName}`;
    swishButton.href = `swish://payment?${new URLSearchParams({ payee: swishNumber, message: paymentMessage })}`;
    window.location.href = swishButton.href;
  } else {
    bookingMessage.textContent += currentLanguage === 'sv'
      ? ' Lägg in arrangörens Swish-nummer i script.js för att öppna Swish.'
      : ' Add the organizer’s Swish number in script.js to open Swish.';
  }
  const chosen = document.querySelector(`[data-seat="${chosenSeat}"]`); chosen.classList.remove('selected'); chosen.classList.add('reserved'); chosen.disabled = true;
  event.target.reset(); chosenSeat = ''; seatInput.value = ''; selectedSeatLabel.textContent = currentLanguage === 'sv' ? 'Ingen vald' : 'None selected';
});

document.querySelectorAll('.rule-tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.rule-tab').forEach(item => item.classList.remove('active')); tab.classList.add('active');
  renderRules();
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
document.querySelector('.contact-form').addEventListener('submit', event => { event.preventDefault(); event.target.querySelector('.button').innerHTML = `${currentLanguage === 'sv' ? 'Meddelande skickat' : 'Message sent'} <i class="fa-solid fa-check"></i>`; event.target.reset(); });
