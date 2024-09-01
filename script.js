function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Section with ID ${sectionId} not found.`);
    }
}
// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = new FormData(form);

    fetch("https://formspree.io/f/xwpeygao", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          status.innerHTML = "<p>Спасибо! Ваше сообщение отправлено.</p>";
          status.style.color = "green";
          form.reset();
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              status.innerHTML = data["errors"]
                .map((error) => error["message"])
                .join(", ");
            } else {
              status.innerHTML =
                "Упс! Произошла ошибка при отправке формы.";
            }
            status.style.color = "red";
          });
        }
      })
      .catch((error) => {
        status.innerHTML = "Упс! Произошла ошибка при отправке формы.";
        status.style.color = "red";
      });
  });
});
