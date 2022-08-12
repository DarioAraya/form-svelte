import App from "./App.svelte";
import { MDCRipple } from "@material/ripple";
import { MDCTextField } from "@material/textfield";

const app = new App({
  target: document.body,
  props: {
    name: "World",
  },
});

const button = [...document.querySelectorAll(".mdc-button")].map(
  (el) => new MDCRipple(el)
);

const textField = [...document.querySelectorAll(".mdc-text-field")].map(
  (el) => new MDCTextField(el)
);

export default app;
