function test() {
  fetch("https://testapi-qsha.onrender.com").then(data => {
    return data.json();
  }).then(displayItem);
  function displayItem(data) {
    createElement(data);
    console.log(data);
  }
}
window.onload = test;
function createElement(data) {
  for (let i = 0; i <= data.length; i++) {

    let firstdiv = document.createElement("div");
    let seconddiv = document.createElement("div");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");


    firstdiv.className = "container";
    seconddiv.className = "card";

    let id = data.length + i;
    img.src = `https://picsum.photos/id/${id}/600/300`
    img.alt = "Basic Image";
    h2.innerHTML = data[i].author;
    p.innerHTML = data[i].quote;

    firstdiv.appendChild(seconddiv);
    seconddiv.appendChild(img)
    seconddiv.appendChild(h2);
    seconddiv.appendChild(p);

    document.body.appendChild(firstdiv);
  }
}

