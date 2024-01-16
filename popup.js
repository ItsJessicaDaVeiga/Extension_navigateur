document.addEventListener("DOMContentLoaded", function () {
  const imageLibrary = [
    "cute1.jpg",
    "cute2.jpg",
    "cute3.jpg",
    "cute4.jpg",
    "cute5.jpg",
    "cute6.jpg",
    "cute7.jpg",
  ];

  const imageContainer = document.getElementById("imageContainer");

  const randomIndex = Math.floor(Math.random() * imageLibrary.length);

  const imagePath = "images/" + imageLibrary[randomIndex];

  imageContainer.src = imagePath;
});

const affirmations = [
  "You got this",
  "You'll figure it out",
  "You're a smart cookie",
  "I believe in you",
  "Sucking at something is the first step towards being good at something",
  "Struggling is part of learning",
  "Everything has cracks - that's how the light gets in",
  "Mistakes don't make you less capable",
  "We are all works in progress",
  "You are a capable human",
  "You know more than you think",
  "10x engineers are a myth",
  "If everything was easy you'd be bored",
  "I admire you for taking this on",
  "You're resourceful and clever",
  "You'll find a way",
  "I know you'll sort it out",
  "Struggling means you're learning",
  "You're doing a great job",
  "It'll feel magical when it's working",
  "I'm rooting for you",
  "Your mind is full of brilliant ideas",
  "You make a difference in the world by simply existing in it",
  "You are learning valuable lessons from yourself every day",
  "You are worthy and deserving of respect",
  "You know more than you knew yesterday",
  "You're an inspiration",
  "Your life is already a miracle of chance waiting for you to shape its destiny",
  "Your life is about to be incredible",
  "Nothing is impossible. The word itself says 'I'm possible!'",
  "Failure is just another way to learn how to do something right",
  "I give myself permission to do what is right for me",
  "You can do it",
  "It is not a sprint, it is a marathon. One step at a time",
  "Success is the progressive realization of a worthy goal",
  "People with goals succeed because they know where they're going",
  "All you need is the plan, the roadmap, and the courage to press on to your destination",
  "The opposite of courage in our society is not cowardice... it is conformity",
  "Whenever we're afraid, it's because we don't know enough. If we understood enough, we would never be afraid",
  "The past does not equal the future",
  "The path to success is to take massive, determined action",
  "It's what you practice in private that you will be rewarded for in public",
  "Small progress is still progress",
  "Don't worry if you find flaws in your past creations, it's because you've evolved",
  "Starting is the most difficult step - but you can do it",
  "Don't forget to enjoy the journey",
  "It's not a mistake, it's a learning opportunity",
];

document.addEventListener("DOMContentLoaded", function () {
  const randomIndex = Math.floor(Math.random() * affirmations.length);

  const citationContainer = document.getElementById("citationContainer");

  const citation = affirmations[randomIndex];

  citationContainer.textContent = citation;
});

//pour minuteur

let intervalId;

function decompte() {
  if (startButton.textContent === "start") {
    startButton.textContent = "stop";
    const departMinutes = timerElement.textContent.match(/\d+/g);
    let temps =
      parseInt(departMinutes[0]) * 60 + parseInt(departMinutes[1]) - 1;
    intervalId = setInterval(() => {
      let minutes = parseInt(temps / 60, 10);
      let secondes = parseInt(temps % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      secondes = secondes < 10 ? "0" + secondes : secondes;

      timerElement.innerText = `${minutes} : ${secondes}`;
      temps = temps <= 0 ? 0 : temps - 1;

      if (temps === 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  } else {
    startButton.textContent = "start";
    clearInterval(intervalId);
  }
}

const timerElement = document.getElementById("number");
const upArrow = document.querySelectorAll(".up");
const startButton = document.getElementById("startButton");
const downArrow = document.querySelectorAll(".down");

upArrow.forEach(function (arrow) {
  arrow.addEventListener("click", function () {
    timerElement.textContent = parseInt(timerElement.textContent) + 1 + " : 00";
  });
});

downArrow.forEach(function (arrow) {
  arrow.addEventListener("click", function () {
    timerElement.textContent = parseInt(timerElement.textContent) - 1 + " : 00";
  });
});

startButton.addEventListener("click", function (event) {
  if (startButton.textContent === "start") {
    chrome.runtime.sendMessage({ action: [timerElement.textContent] });
    startButton.textContent = "stop";
  } else {
    chrome.runtime.sendMessage({ action: "stop" });
    startButton.textContent = "start";
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action) {
    startButton.textContent = "stop";
    const temps = request.action;
    let minutes = Math.floor(temps / 60);
    let secondes = temps % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;
    timerElement.textContent = `${minutes} : ${secondes}`;
  }
});

//musique

document.addEventListener("DOMContentLoaded", function () {
  const songLibrary = [
    "songs/song1.mp3",
    "songs/song2.mp3",
    "songs/song3.mp3",
    "songs/song4.mp3",
    "songs/song5.mp3",
  ];
  const audioPlayer = document.getElementById("myAudio");

  const randomIndex = Math.floor(Math.random() * songLibrary.length);

  const songPath = songLibrary[randomIndex];

  audioPlayer.src = songPath;

  audioPlayer.play();
});
