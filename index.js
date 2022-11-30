// Your code goes hereCode your solution in index.js. First, set up a DOMContentLoaded event listener to detect when the HTML page has loaded and the document is ready to be manipulated. Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"

document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("text");
  text.textContent = "This is really cool!";
});
