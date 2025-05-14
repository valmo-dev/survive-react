export function Timer(props) {
  return (
    <div className="fixed top-4 right-4 border-2 border-sky-900/70 bg-sky-200/70 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-white">
      <svg
        className="w-8 h-8 text-sky-950"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="font-mono font-bold text-xl tracking-wider text-sky-100">
        {props.timer}
      </span>
    </div>
  );
}
