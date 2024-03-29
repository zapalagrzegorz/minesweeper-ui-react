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
          <div key={`row${index}`} className="row">
            {row.map((tile: any, colindex: number) => (
              <Tile
                key={`row${index + "" + colindex}`}
                tile={tile}
                updateGame={updateGame}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
