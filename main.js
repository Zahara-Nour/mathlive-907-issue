import "./style.css";
import "mathlive/dist/mathlive-fonts.css";
import * as mathlive from "mathlive";

const app = document.querySelector("#app");
const latex1 = '\\text{Le résultat de }37+(-56)\\text{ est } \\textcolor{green}{\\text{négatif}}'
const latex2 = '\\textcolor{green}{\\text{négatif}}'

app.innerHTML = `
  <h2>Reproduce your Mathlive Bug / Issue below:</h2>
  </br>
  <span>${latex1} :</span>
  </br>
  <span>$$${latex1}$$</span>
  </br>
  <span>${latex2} :</span>
  </br>
  <span>$$${latex2}$$</span>


`;

mathlive.renderMathInDocument()