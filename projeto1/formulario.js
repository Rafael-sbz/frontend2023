let formElement = document.querySelector(".form");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);

  fetch("https://648cd5248620b8bae7ed6de5.mockapi.io/api/v1/clientes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
.then((res) => res.json())
    .then((data) => console.log(data))
    .then(alert('Dados enviados com sucesso!'));
});
