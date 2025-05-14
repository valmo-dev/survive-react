import Cabin from "../assets/icons/cabin.svg";
import Tree from "../assets/icons/tree.svg";
import Survivor from "../assets/icons/survivor.svg";
import { useState, useEffect } from "react";

export function Map({ gridData, onCellClick }) {
  return (
    <div className="w-full p-4 border-2 border-sky-900/70 backdrop-blur-sm rounded-md bg-sky-200/70">
      <h1 className="text-2xl font-bold text-slate-800 mb-4">Carte</h1>
      <div className="grid grid-cols-5">
        {gridData.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="w-32 h-28 flex items-center justify-center cursor-pointer transition-all duration-200 border bg-gradient-to-r from-slate-50 to-gray-50 border-gray-400 border-collapse relative"
              onClick={() => onCellClick(rowIndex, colIndex)}
            >
              {cell.type === "house" ? (
                <img src={Cabin} alt="Maison" className="w-14 h-14" />
              ) : cell.type === "forest" ? (
                <>
                  <img src={Tree} alt="Arbre" className="w-14 h-14" />
                  {cell.isHarvesting && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1">
                      <img
                        src={Survivor}
                        alt="Aventurier"
                        className="w-6 h-6"
                      />
                    </div>
                  )}
                </>
              ) : null}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
