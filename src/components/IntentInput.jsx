import { useState } from "react";

export default function IntentInput({ onSubmit }) {
  const [intent, setIntent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!intent.trim()) return;
    onSubmit(intent);
    setIntent("");
  }

  return (
    <form onSubmit={handleSubmit} className="intent-form">
      <input
        type="text"
        placeholder="Tell me what you want to do..."
        value={intent}
        onChange={(e) => setIntent(e.target.value)}
        className="intent-input"
      />
    </form>
  );
}
