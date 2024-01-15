document.addEventListener("DOMContentLoaded", function (){

  const imageLibrary = ["cute1.jpg", "cute2.jpg", "cute3.jpg", "cute4.jpg", "cute5.jpg", "cute6.jpg", "cute7.jpg"];

  const imageContainer = document.getElementById("imageContainer");

  const randomIndex = Math.floor(Math.random() * imageLibrary.length);

  const imagePath = "images/" + imageLibrary[randomIndex];

  imageContainer.src = imagePath;

  })


const affirmations = [
  "Sucking at something is the first step towards being good at something",
  "You'll figure it out",
  "You're a smart cookie",
  "Struggling is part of learning",
  "We are all works in progress",
  "You know more than you think",
  "You're doing a great job",
  "I believe in you"];

      
      document.addEventListener("DOMContentLoaded", function (){

        
        const randomIndex = Math.floor(Math.random() * affirmations.length);

        const citationContainer = document.getElementById("citationContainer")

        const citation = affirmations[randomIndex];
        
        citationContainer.textContent = citation
  
      })
