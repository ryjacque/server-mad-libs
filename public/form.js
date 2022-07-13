let header = document.querySelector("h1");
let input = document.querySelector("input")
let form = document.querySelector("form")
if (this.location.pathname.startsWith("/first-word")){
header.textContent="We need a verb."
input.name="first"
input.placeholder = "verb..."
form.action = "http://localhost:4000/second-word";
}
if (this.location.pathname.startsWith("/second-word")){
    header.textContent = "We need an adjective."
    input.name="second"
    input.placeholder="adjective..."
    form.action = "http://localhost:4000/third-word";
}
if (this.location.pathname.startsWith("/third-word")){
    header.textContent = "We need a noun."
    input.name="third";
    input.placeholder = "noun..."
    form.action = "http://localhost:4000/fourth-word";
}
if (this.location.pathname.startsWith("/fourth-word")){
    header.textContent = "We need another adjective."
    input.name="fourth";
    input.placeholder = "adjective..."
    form.action = "http://localhost:4000/fifth-word";
}
if (this.location.pathname.startsWith("/fifth-word")){
    header.textContent = "We need a length of time."
    input.name="fifth";
    input.placeholder = "Ex: 'one week'"
    form.action = "http://localhost:4000/sixth-word";
}
if (this.location.pathname.startsWith("/sixth-word")){
    header.textContent = "We need another verb."
    input.name="sixth";
    input.placeholder = "verb..."
    form.action = "http://localhost:4000/seventh-word";
}
if (this.location.pathname.startsWith("/seventh-word")){
    header.textContent = "We need another noun."
    input.name="seventh";
    input.placeholder = "noun..."
    form.action = "http://localhost:4000/story";
}

