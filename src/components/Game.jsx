import { ResourcesMenu } from "./ResourcesMenu";
import { QuestList } from "./QuestList";
import { Timer } from "./Timer";
import { Map } from "./Map";
import { GameOver } from "./GameOver";
import { Alert } from "./Alert";
import { useState, useEffect } from "react";

export function Game() {
  const [survivor, setSurvivor] = useState(2);
  const [maxSurvivor, setMaxSurvivor] = useState(2);
  const [meat, setMeat] = useState(1);
  const [wood, setWood] = useState(0);
  const [stone] = useState(0);
  const [timer, setTimer] = useState(0);
  const [grid, setGrid] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const newGrid = Array(5)
      .fill()
      .map(() =>
        Array(5)
          .fill()
          .map(() => ({
            type: Math.random() > 0.7 ? "forest" : "empty",
          }))
      );

    newGrid[2][2] = { type: "house" };

    setGrid(newGrid);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);

      if (!isGameOver && (timer + 1) % 10 === 0 && survivor > 0) {
        setMeat((prevMeat) => {
          const newMeat = Math.max(0, prevMeat - survivor);

          if (newMeat === 0 && prevMeat < survivor) {
            setSurvivor((prevSurvivor) => {
              const updatedSurvivors = Math.max(0, prevSurvivor - 1);
              if (updatedSurvivors === 0) {
                setIsGameOver(true);
              }
              return updatedSurvivors;
            });
          }
          return newMeat;
        });
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timer, survivor, isGameOver]);

  // Gestion de la récolte du bois avec délai
  useEffect(() => {
    if (isGameOver) return;

    const harvestInterval = setInterval(() => {
      let gridNeedsUpdate = false;
      const updatedGrid = grid.map((row) =>
        row.map((cell) => {
          if (
            cell.isHarvesting &&
            cell.harvestStartTime &&
            Date.now() >= cell.harvestStartTime + 5000
          ) {
            gridNeedsUpdate = true;
            setWood((prevWood) => prevWood + 1); // Ajoute 1 bois
            setMeat((prevMeat) => prevMeat + 1); // Ajoute 1 viande
            setSurvivor((prevSurvivor) =>
              Math.min(maxSurvivor, prevSurvivor + 1)
            );
            // La cellule redevient une forêt normale, prête pour une nouvelle récolte
            return { ...cell, isHarvesting: false, harvestStartTime: null };
          }
          return cell;
        })
      );

      if (gridNeedsUpdate) {
        setGrid(updatedGrid);
      }
    }, 1000); // Vérifie toutes les secondes

    return () => clearInterval(harvestInterval); // Nettoyage de l'intervalle
  }, [grid, meat, maxSurvivor, isGameOver]); // Dépendance à `grid` pour que l'effet se mette à jour correctement

  // Gestion du clic sur une cellule
  const handleCellClick = (rowIndex, colIndex) => {
    if (isGameOver) return;

    const currentCell = grid[rowIndex][colIndex];

    // Si c'est une case vide et bois >= 5
    if (currentCell.type === "empty" && wood >= 5) {
      const newGrid = grid.map((row, rIdx) =>
        row.map((cell, cIdx) => {
          if (rIdx === rowIndex && cIdx === colIndex) {
            return { ...cell, type: "house" }; // Transforme en maison
          }
          return cell;
        })
      );
      setGrid(newGrid);
      setWood((prevWood) => prevWood - 5);
      setSurvivor((prevSurvivor) => prevSurvivor + 2);
      setMaxSurvivor((prevMaxSurvivor) => prevMaxSurvivor + 2);
    }
    // Si c'est une forêt et qu'elle n'est pas déjà en cours de récolte
    else if (currentCell.type === "forest" && !currentCell.isHarvesting) {
      if (survivor > 0) {
        const newGrid = grid.map((row, rIdx) =>
          row.map((cell, cIdx) => {
            if (rIdx === rowIndex && cIdx === colIndex) {
              // Commence la récolte
              return {
                ...cell,
                isHarvesting: true,
                harvestStartTime: Date.now(),
              };
            }
            return cell;
          })
        );
        setGrid(newGrid);
        setSurvivor((prevSurvivor) => prevSurvivor - 1);
      } else {
        setShowAlert(true);
      }
      // Le bois sera ajouté après 5 secondes par le useEffect dédié
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  if (isGameOver) {
    return <GameOver />;
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-sky-700 via-sky-800 to-sky-950 p-4">
      {showAlert && (
        <Alert
          title="Aucun survivant disponible"
          description="Vous n'avez plus de survivants disponibles pour récolter le bois."
          onClose={() => setShowAlert(false)}
        />
      )}
      <Timer timer={formatTime(timer)} />
      <QuestList />
      <div className="absolute top-1/12 left-4/12">
        <Map gridData={grid} onCellClick={handleCellClick} />
      </div>
      <ResourcesMenu
        survivor={survivor}
        maxSurvivor={maxSurvivor}
        meat={meat}
        wood={wood}
        stone={stone}
      />
    </div>
  );
}
