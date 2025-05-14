import { useState } from "react";

const Quests = [
  {
    id: 1,
    title: "Quête 1",
    description: "Description pour la quête 1",
    completed: false,
  },
  {
    id: 2,
    title: "Quête 2",
    description: "Description pour la quête 2",
    completed: false,
  },
  {
    id: 3,
    title: "Quête 3",
    description: "Description pour la quête 3",
    completed: false,
  },
  {
    id: 4,
    title: "Quête 4",
    description: "Description pour la quête 4",
    completed: false,
  },
  {
    id: 5,
    title: "Quête 5",
    description: "Description pour la quête 5",
    completed: false,
  },
  {
    id: 6,
    title: "Quête 6",
    description: "Description pour la quête 6",
    completed: false,
  },
  {
    id: 7,
    title: "Quête 7",
    description: "Description pour la quête 7",
    completed: false,
  },
  {
    id: 8,
    title: "Quête 8",
    description: "Description pour la quête 8",
    completed: false,
  },
  {
    id: 9,
    title: "Quête 9",
    description: "Description pour la quête 9",
    completed: false,
  },
  {
    id: 10,
    title: "Quête 10",
    description: "Description pour la quête 10",
    completed: false,
  },
];

export function QuestList() {
  const [quests, setQuests] = useState(Quests);
  const [completedOrder, setCompletedOrder] = useState([]);

  const completedQuests = quests.filter((quest) => quest.completed);
  const incompleteQuests = quests.filter((quest) => !quest.completed);

  let displayQuests = [];

  if (completedQuests.length <= 1) {
    displayQuests = [...completedQuests];

    const remainingSlots = 3 - displayQuests.length;
    displayQuests = [
      ...displayQuests,
      ...incompleteQuests.slice(0, remainingSlots),
    ];
  } else {
    const latestCompletedId = completedOrder[completedOrder.length - 1];
    const latestCompleted = quests.find((q) => q.id === latestCompletedId);

    if (latestCompleted) {
      displayQuests = [latestCompleted];
    }

    const remainingSlots = 3 - displayQuests.length;
    displayQuests = [
      ...displayQuests,
      ...incompleteQuests.slice(0, remainingSlots),
    ];
  }

  const handleToggle = (id) => {
    setQuests((prev) =>
      prev.map((quest) => {
        if (quest.id === id) {
          const newCompleted = !quest.completed;

          if (newCompleted) {
            setCompletedOrder((prev) => [...prev, id]);
          } else {
            setCompletedOrder((prev) => prev.filter((qId) => qId !== id));
          }

          return { ...quest, completed: newCompleted };
        }
        return quest;
      })
    );
  };
  return (
    <div className="flex flex-col w-full max-w-sm p-4 border-2 border-sky-900/70 backdrop-blur-sm rounded-md bg-sky-200/70">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Quêtes</h1>
      {displayQuests.map((quest) => (
        <div
          key={quest.id}
          className={`flex items-center gap-3 p-4 mb-4 rounded-lg transition-all duration-300 ${
            quest.completed
              ? "bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-400"
              : "bg-gradient-to-r from-slate-50 to-gray-50 border-l-4 border-gray-400"
          }`}
        >
          <button
            onClick={() => handleToggle(quest.id)}
            className={`w-8 h-8 rounded flex items-center justify-center transition-all duration-200 ${
              quest.completed
                ? "bg-emerald-400 hover:bg-emerald-500 ring-2 ring-emerald-200"
                : "bg-gray-400 hover:bg-gray-500 ring-2 ring-gray-200"
            }`}
            title="Changer l'état de la quête"
          >
            {quest.completed ? (
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <span className="w-4 h-4 block rounded-full bg-white"></span>
            )}
          </button>
          <div>
            <h2
              className={`font-extrabold text-xl ${
                quest.completed ? "text-emerald-800" : "text-gray-800"
              }`}
            >
              {quest.title}
            </h2>
            <p
              className={`text-md ${
                quest.completed ? "text-emerald-700/70" : "text-gray-700/70"
              }`}
            >
              {quest.description}
            </p>
          </div>
        </div>
      ))}
      <div className="mt-6 text-center text-sm text-slate-900">
        {quests.filter((q) => q.completed).length} / {quests.length} quêtes
        complétées
      </div>
    </div>
  );
}
