export const SETTINGS =
  localStorage.getItem("front-end-test-lang") === "pt-br"
    ? require("./pt-br")
    : require("./pt-br");

if (!localStorage.getItem("front-end-test-lang")) {
  localStorage.setItem("front-end-test-lang", "pt-br");
}
