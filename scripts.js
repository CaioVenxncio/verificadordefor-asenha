const passwordInput = document.querySelector("#passwordInput");

passwordInput.addEventListener("input", function () {
  const password = this.value;

  const strengthIndicator = document.querySelector(
    "#password-strength-indicator"
  );

  const strengthText = document.querySelector("#password-strength-text");

  const strengths = {
    0: "Extremamente frágil",
    1: "Pouco resistente",
    2: "Intermediária",
    3: "Forte",
    4: "Extremamente Forte",
  };

  let score = 0;

  // Requisitos
  if (password.length >= 8) score++;
  if (password.match(/[a-z]/)) score++;
  if (password.match(/[A-Z]/)) score++;
  if (password.match(/[0-9]/)) score++;
  if (password.match(/[^a-zA-Z0-9]/)) score++;

  //  Calculo da %, pq a largura vai ser em %
  const width = (score / 4) * 100;

  strengthIndicator.style.width = `${width}%`;

  switch (score) {
    case 1:
      strengthIndicator.style.backgroundColor = "#e30c2f";
      break;
    case 2:
      strengthIndicator.style.backgroundColor = "#ffa500";
      break;
    case 3:
      strengthIndicator.style.backgroundColor = "#f3d519";
      break;
    case 4:
      strengthIndicator.style.backgroundColor = "#13ab45";
      break;
    default:
      strengthIndicator.style.backgroundColor = "transparent";
      break;
  }

  if (password.length > 0) {
    strengthText.innerHTML = `Força: ${strengths[score]}`;
  } else {
    strengthText.innerHTML = "";
  }
});
