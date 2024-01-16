function decompte(actualTime, callback) {
  const timeParts = actualTime.split(":").map((part) => parseInt(part, 10));
  const [minutes, seconds] = timeParts;
  let temps = minutes * 60 + seconds;
  intervalId = setInterval(() => {
    temps = temps <= 0 ? 0 : temps - 1;
    console.log(temps);
    chrome.runtime.sendMessage({ action: [temps] });
    if (temps === 0) {
      clearInterval(intervalId);
      callback("00:00");
    }
  }, 1000);
}
let intervalId;
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "stop") {
    clearInterval(intervalId);
  } else if (request.action) {
    decompte(request.action[0], function (tempsFinal) {
      console.log("Temps écoulé :", tempsFinal);
    });
  }
});
