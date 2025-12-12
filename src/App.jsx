import { useState } from "react";
import IntentInput from "./components/IntentInput";
import AdaptiveLayout from "./components/AdaptiveLayout";
import { interpretIntent } from "./logic/intentEngine";

export default function App() {
  const [mode, setMode] = useState(null);
  const [rawIntent, setRawIntent] = useState("");

  function handleIntentSubmit(text) {
    setRawIntent(text);
    const detectedMode = interpretIntent(text);
    setMode(detectedMode);
  }

  return (
    <div className="app-container">
      <h1>InteractOS</h1>
      <p>
        Try typing your intent — for example: <br />
        <span className="hint">“Give me a quick overview”</span> ·{" "}
        <span className="hint">“Help me decide”</span> ·{" "}
        <span className="hint">“Explain deeply”</span>
      </p>

      <IntentInput onSubmit={handleIntentSubmit} />

      {mode && (
        <>
          <p className="intent-feedback" role="status" aria-live="polite">
            Mode detected: <strong>{mode}</strong>
          </p>

          <AdaptiveLayout mode={mode} />
        </>
      )}
    </div>
  );
}
