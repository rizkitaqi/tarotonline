const drawButton = document.getElementById('drawButton');
const cardDisplay = document.getElementById('cardDisplay');
const cardBackText = document.getElementById('cardBackText');
const cardInner = document.getElementById('cardInner');

const tarotCards = {
  male: [
    "Hari ini lu bakal keluar nongkrong pake hoodie yang sama kaya yang dipake kemarin",
    "Lu kalo buka hp pas siang ini siklusnya cuman ig-tiktok-wa",
    "Korek lu bakal ilang pas dibawa nongkrong nanti",
    "Lu kalo makan harus sambil nonton youtube",
  ],
  female: [
    "Hari ini bakal scroll shoppe lagi padahal keranjang udah 99+ tapi enggak di checkout",
    "lu bakal pergi ke cafe tapi pesennya malah matcha latte",
    "bakal ada strangers yang ajak kamu kenalan",
    "bulan ini lu bakal ketemu mantan lu pas SMA di mall/cafe",
  ],
  other: [
    "Nanti malem pas scroll tiktok sambil rebahan, hpnya jatoh ke muka",
    "📺 Kamu akan nonton satu episode... terus tanpa sadar tamat satu season sambil nyalahin algoritma.",
    "🎵 Kamu akan play lagu yang sama setiap hari",
    "Kamu bakal lupa hari karena bulan ini lagi libur kuliah",
  ]
};

drawButton.addEventListener('click', () => {
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!gender) {
    alert("Please select your energy first 🔮");
    return;
  }

  const selectedGender = gender.value;
  const cards = tarotCards[selectedGender];
  const randomCard = cards[Math.floor(Math.random() * cards.length)];

  cardBackText.innerHTML = randomCard;
  cardDisplay.style.display = "flex";

  // Trigger flip animation
  cardInner.classList.remove('flip');
  void cardInner.offsetWidth; // force reflow
  cardInner.classList.add('flip');
});
