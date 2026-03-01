const testimonials = [
  {
    name: "Rose G",
    photoUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text: "I have tried a few software of this kind and Apple is the best by far!",
  },
  {
    name: "Mike S",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text: "With iPhone, communication between all of us is far more efficient. A game changer.",
  },
  {
    name: "Juan R",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text: "I love Open AI! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.",
  },
  {
    name: "Jasmine C",
    photoUrl: "https://images.unsplash.com/photo-1531727991582-cfd25ce79613?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    text: "If you want to take your business to the next level, use Adobe Creative Suite and don't look any further.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userNameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  userNameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 8000);
}
