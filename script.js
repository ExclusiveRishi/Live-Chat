const textBox = document.querySelector("#text");
const submit = document.querySelector("#submit");
const output = document.querySelector(".messages");

submit.addEventListener("click", () => {
	const message = textBox.value;
	const finalMessage = "<p class='outputText'>" + message + "</p>";
	output.insertAdjacentHTML("beforeend", finalMessage);
});
