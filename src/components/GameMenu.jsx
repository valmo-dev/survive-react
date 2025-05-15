import React, { useState, useEffect } from "react";
import Shed from "../assets/icons/shed.svg";
import { Game } from "./Game";
import { Alert } from "./Alert";

const listSentences = [
  "Que la partie commence !",
  "Prêt à relever le défi ?!",
  "Votre destin est entre vos mains.",
  "L'aventure vous attend.",
];

export function GameMenu() {
  const [sentence, setSentence] = useState("");
  const [showGame, setShowGame] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * listSentences.length);
    setSentence(listSentences[randomIndex]);
  }, []);

  const handlePlayClick = () => {
    setShowGame(true);
  };

  const handleCreditsClick = () => {
    setShowAlert(true);
  };

  const handleCloseCredits = () => {
    setShowAlert(false);
  };

  if (showGame) {
    return <Game />;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-sky-700 via-sky-800 to-sky-950">
      <div className="w-full max-w-md mx-auto px-6 py-10 bg-slate-900/80 rounded-xl flex flex-col items-center">
        <header className="text-center mb-10">
          <img
            src={Shed}
            alt="Logo du jeu"
            className="mx-auto w-20 h-20 mb-6"
          />
          <h1 className="text-4xl font-bold font-sans text-white mb-2 tracking-tight">
            Survive React
          </h1>
          <p className="text-base text-slate-400 italic">{sentence}</p>
        </header>

        <nav className="flex flex-col gap-4 w-full">
          <button
            onClick={handlePlayClick}
            className="cursor-pointer w-full bg-sky-600 hover:bg-sky-500 text-white font-medium py-2 rounded-md text-base transition-colors"
          >
            Jouer
          </button>
          <button
            onClick={handleCreditsClick}
            className="cursor-pointer w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 rounded-md text-base transition-colors"
          >
            Crédits
          </button>
        </nav>

        <footer className="absolute bottom-4 text-center text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Valou. Tous droits réservés.</p>
        </footer>
      </div>

      {showAlert && (
        <Alert
          title="Crédit du jeu"
          description="Jeu développé par Valentin MOREAU, avec React & Tailwind Css."
          onClose={handleCloseCredits}
        />
      )}
    </div>
  );
}
