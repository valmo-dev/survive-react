export function Alert({ title, description, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
      onClick={onClose}
    >
      <div
        className="rounded-xl bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900/95 p-7 shadow-2xl w-full max-w-md mx-auto text-white border-2 border-sky-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-4 mb-4">
          {/* <div class="flex-shrink-0 flex items-center justify-center bg-emerald-500/20 rounded-lg p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width={2.2}
              stroke="currentColor"
              class="w-7 h-7 text-emerald-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              ></path>
            </svg>
          </div> */}
          <div className="flex-1">
            <p className="font-bold text-lg text-white mb-1">{title}</p>
            <p className="text-slate-300 text-base">{description}</p>
          </div>
        </div>
        {/* <button
          class="absolute top-0 right-0 border text-slate-400 hover:bg-sky-900/30 p-1 rounded-md transition-colors"
          onClick={onClose}
          aria-label="Fermer l'alerte"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width={2}
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            ></path>
          </svg>
        </button> */}
      </div>
    </div>
  );
}
