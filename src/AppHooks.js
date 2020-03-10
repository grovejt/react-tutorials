import React from "react";
import "./App.css";
import UseStateExample from "./components/hooks/UseStateExample";
import UseEffectExample from "./components/hooks/UseEffectExample";

function AppHooks() {
  return (
    <div className="App">
      <UseEffectExample />
      <UseStateExample />
    </div>
  );
}

export default AppHooks;
