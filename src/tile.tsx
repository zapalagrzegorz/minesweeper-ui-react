import React from "react";
import { UpdateGame } from "./game";
import { Tile as TileClass } from "./minesweeper";
import "./tile.scss";

interface Props {
  tile: TileClass;
  updateGame: UpdateGame;
}
export function Tile({ tile, updateGame }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    updateGame(tile, e.altKey);
  };
  let content = " ";
  let className = "tile";

  if (tile.explored) {
    if (tile.bombed) content = "💣";
    if (tile.adjacentBombCount()) content = tile.adjacentBombCount().toString();
    className += " explored";
  } else if (tile.flagged) {
    content = "🚩";
  }

  return (
    <div className={className} onClick={(e) => handleClick(e)}>
      {content}
    </div>
  );
}
