const user = "arthur";
const domain = "capozzi.ch";
const address = user + "@" + domain;

function insertEmailLink(elementId) {
  const container = document.getElementById(elementId);
  if (!container) return;

  const link = document.createElement("a");
  link.href = "mailto:" + address;
  link.textContent = address;
  container.appendChild(link);
}

insertEmailLink("email");
insertEmailLink("contact-email");

const emailButton = document.getElementById("email-button");
if (emailButton) emailButton.href = "mailto:" + address;
