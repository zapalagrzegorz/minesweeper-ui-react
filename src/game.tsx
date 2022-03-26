import React, { useCallback, useState } from "react";
import "./game.css";
import { Board } from "./board";
import * as Minesweeper from "./minesweeper";
import { Modal } from "./modal";

export type UpdateGame = (tile: Minesweeper.Tile, isReveal: boolean) => void;

function Game() {
  const [board, setBoard] = useState(new Minesweeper.Board(5, 3));

  const [_, setUnusedState] = useState({});
  // Emulates `forceUpdate()`
  const forceUpdate = useCallback(() => setUnusedState({}), []);

  const updateGame: UpdateGame = (tile, isFlagging) => {
    if (isFlagging) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    // dirty hack to force re-render as we mutate local state object
    forceUpdate();
    setBoard(board);
  };

  const restartGame = () => {
    setBoard(new Minesweeper.Board(5, 3));
  };
  const won = board.won();
  const lost = board.lost();

  return (
    <>
      <div className="main">
        <h1>Minesweeper</h1>
        <p>Click to explore a tile. Alt + click to flag a tile.</p>
        <br />
        <Board board={board} updateGame={updateGame} />
      </div>
      <Modal won={won} lost={lost} onClick={restartGame} />
    </>
  );
}

export default Game;
