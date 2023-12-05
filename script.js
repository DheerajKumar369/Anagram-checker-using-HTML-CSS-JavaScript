const btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", () => {
  //Get user input from the input field
  const word1 = document.getElementById("word1Input").value.toLowerCase();
  const word2 = document.getElementById("word2Input").value.toLowerCase();

  //Removev spaces and punctuation from both words
  const cleanedWord1 = word1.replace(/[^\w]/g, "");
  const cleanedWord2 = word2.replace(/[^\w]/g, "");

  //Check if the lengths are the same
  if (cleanedWord1.length !== cleanedWord2.length) {
    result.textContent = "Not an anagram";
    result.classList.remove("success");
    result.classList.add("error");
    return;
  }

  //Count letter occurences in the first word
  const letterCount1 = {};
  for (const char of cleanedWord1) {
    letterCount1[char] = (letterCount1[char] || 0) + 1;
  }

  //Count letter occurences in the second word
  const letterCount2 = {};
  for (const char of cleanedWord2) {
    letterCount2[char] = (letterCount2[char] || 0) + 1;
  }

  //Compare letter counts
  for (const char in letterCount1) {
    if (letterCount1[char] !== letterCount2[char]) {
      result.textContent = "Not an anagram";
      result.classList.remove("success");
      result.classList.add("error");
      return;
    }
  }

  //If all letter counts are same  it's an anagram
  document.getElementById("result").textContent = "It's an anagram!";
  result.classList.remove("error");
  result.classList.add("success");
});