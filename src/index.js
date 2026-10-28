function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay:1,
    cursor:"",
  });
}

function generatePoem(event) {
  event.preventDefault(); 
  

  let instructionInput = document.querySelector("#instruction-value");

  let apiKey = "o5t6f56b82d0fb3f07f494e803db14aa";
  let prompt =`Write a poem about ${instructionInput.value}`;
  let context ="please provide a clear and precise answer";
  let apiUrl =
  `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem)
    

  

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem)