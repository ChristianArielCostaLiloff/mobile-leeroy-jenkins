import * as React from "react";
import { Provider } from "react-redux";
import Navigation from "./src/navigation/Navigation";
import { store } from "./src/redux/reducers/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
