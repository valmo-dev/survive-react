import { ResourcesMenu } from "./ResourcesMenu";
import { useState } from "react";

export function Game() {
  const [survivor, setSurvivor] = useState(0);
  const [maxSurvivor, setMaxSurvivor] = useState(0);
  const [meat, setMeat] = useState(0);
  const [wood, setWood] = useState(0);
  const [stone, setStone] = useState(0);
  return (
    <ResourcesMenu
      survivor={survivor}
      maxSurvivor={maxSurvivor}
      meat={meat}
      wood={wood}
      stone={stone}
    />
  );
}
