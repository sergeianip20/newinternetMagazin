import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./state/store";
import { setupStore } from "./state/storeToolkit";
const rootElement = document.getElementById("root");
console.log(setupStore);
render(
  <Provider store={setupStore}>
    <App />
  </Provider>,
  rootElement
);
