const selectedAll = document.querySelectorAll(".camadas");

selectedAll.forEach((selected) => {
  const optionsContainer = selected.previousElementSibling;

  const optionsList = optionsContainer.querySelectorAll(".option");

  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });

  optionsList.forEach( o => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });
});

  const optionsContainer = document.querySelector(".option-container");

  const optionsList = document.querySelectorAll(".option");

  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });

  optionsList.forEach( o => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });


function link() {
  
}