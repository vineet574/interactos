import { useState } from "react";

export default function IntentInput({ onSubmit }) {
  const [intent, setIntent] = useState("");
  const [listening, setListening] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!intent.trim()) return;
    onSubmit(intent);
    setIntent("");
  }

  function startVoiceInput() {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice input not supported in this browser");
      return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setIntent(spokenText);
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };
  }

  return (
    <form onSubmit={handleSubmit} className="intent-form">
      <input
        type="text"
        placeholder="Type or speak your intent..."
        value={intent}
        onChange={(e) => setIntent(e.target.value)}
        className="intent-input"
        aria-label="Intent input"
        autoFocus
      />
      <button
        type="button"
        onClick={startVoiceInput}
        className="voice-btn"
        aria-label="Start voice input"
      >
        {listening ? "Listening..." : "🎤"}
      </button>
    </form>
  );
}
