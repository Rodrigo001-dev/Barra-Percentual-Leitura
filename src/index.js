// container do texto
const postWrap = document.querySelector(".post-wrap");

// criar a barra
let bar = document.createElement("div");

//Estilo da barra
bar.style.height = "4px";
bar.style.width = "0";
bar.style.backgroundColor = "#6633cc";
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.zIndex = "9999";
bar.style.transition = "0.2s"

// adiciona no corpo do html
document.body.append(bar);

// atualizar a barra
function updateBar() {
  const textHeight = postWrap.offsetHeight;

  const pagePositionY = window.pageYOffset;
  // console.log(postWrap.offsetHeight);

  //regra de 3
  const updatedBar = pagePositionY * 100 / textHeight; // pagePositionY = valor que varia, textHeight = valor fiquiso
  
  bar.style.width = updatedBar + "%";
}

window.addEventListener("load", () => {
  // verificar o movimento do scroll
  document.addEventListener("scroll", updateBar);
})