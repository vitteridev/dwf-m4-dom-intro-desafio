const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function removeLiEL() {
  const liEl = document.querySelectorAll("li");
  for (i = 0; i < liEl.length; i++) {
    liEl[i].remove();
  }
}

function addElements() {
  const listaEl = document.querySelector(".lista");
  for (i = 0; i < cosasQueAprendimos.length; i++) {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = cosasQueAprendimos[i].tema;
    newLiEl.className = cosasQueAprendimos[i].class;
    listaEl.appendChild(newLiEl);
  }
}

function main() {
  removeLiEL();
  addElements();
  addClass();
}

main();
