import Skull from "../assets/icons/skull.svg";
import { useState } from "react";
import { Game } from "./Game";

export function GameOver() {
  const [showGame, setShowGame] = useState(false);

  const handlePlayClick = () => {
    setShowGame(true);
  };

  if (showGame) {
    return <Game />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-sky-700 via-sky-800 to-sky-950">
      <h1 className="text-4xl font-extrabold mb-16">GAME OVER !</h1>
      <div className="flex flex-col gap-5 group mx-2 cursor-pointer">
        <div className="w-44 sm:w-60 aspect-square items-center justify-center flex">
          <img
            src={Skull}
            alt=""
            className="group-hover:ease-in-out transition duration-700 group-hover:duration-1000 cursor-pointer object-center object-cover group-hover:scale-110 sm:group-hover:scale-150 w-16 sm:w-40 aspect-square rotate-0 group-hover:-rotate-[360deg] group-hover:stroke-sky-600 fill-sky-600 group-hover:-translate-y-12 group-hover:-skew-y-12 group-hover:skew-x-12"
          />
        </div>

        <button
          onClick={handlePlayClick}
          className="flex flex-row place-items-center place-content-between rounded py-2 px-4 bg-sky-900/70 hover:bg-sky-900/40"
        >
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-lg sm:text-xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-sky-600 dark:after:bg-sky-500 text-gray-600 dark:text-sky-500">
              Rejouer
            </p>
            {/* <p class="text-sm text-gray-500">Design, Dimension</p> */}
          </div>
          <div className="-rotate-45 cursor-pointer">
            <svg
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600 font-semibold text-lg sm:text-xl transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:text-gray-200 fill-sky-600 group-hover:bg-sky-600 group-hover:fill-white group-hover:rotate-45 p-px rounded-full w-10 group-hover:rounded-full group-hover:animate-pulse"
            >
              <path
                d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z"
                fill-rule="nonzero"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
