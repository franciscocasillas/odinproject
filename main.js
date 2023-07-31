const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const paragraph1 = document.createElement("p");
paragraph1.textContent = "Hey, I'm red!";
paragraph1.style.color = "red";
container.appendChild(paragraph1);

const header3 = document.createElement("h3");
header3.textContent = "I'm a blue h3!";
header3.style.color = "blue";
container.appendChild(header3);

const newdiv = document.createElement("div");
newdiv.style.border = "solid black 1px";
newdiv.style.backgroundColor = "pink";

const header1 = document.createElement("h1");
header1.textContent = "I'm a div";
newdiv.appendChild(header1);

const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!";
newdiv.appendChild(paragraph2);
container.appendChild(newdiv);
