const CHROME_EXTENSION_URL = import.meta.env.VITE_CHROME_EXTENSION_URL;

function AddToChromeButton() {
  const handleAddToChrome = () => {
    if (!CHROME_EXTENSION_URL) {
      alert("GoLink Chrome extension is currently in development.");

      return;
    }

    window.open(CHROME_EXTENSION_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleAddToChrome}
      className="flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.25" />

        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
      Add to Chrome
    </button>
  );
}

export default AddToChromeButton;
