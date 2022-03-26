import * as Minesweeper from "./minesweeper";
import { Tile } from "./tile";
import "./board.css";
import { UpdateGame } from "./game";

interface Props {
  board: Minesweeper.Board;
  updateGame: UpdateGame;
}
export function Board({ board, updateGame }: Props) {
  return (
    <div>
      {board.grid.map((row, index) => {
        return (
          <div key={index} className="row">
            {row.map((tile: any, index: number) => (
              <Tile key={index} tile={tile} updateGame={updateGame} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
