import "./modal.scss";

interface Props {
  won: boolean;
  lost: boolean;
  onClick: () => void;
}

export function Modal({ won, lost, onClick }: Props) {
  let modalClassName = "modal";
  if (won || lost) {
    modalClassName += " is-active";
  }
  return (
    <section id="modal" className={modalClassName}>
      <article className="modal-content">
        <h1>Game is over</h1>

        <p>
          {won && (
            <span>
              You've <strong>won</strong>
            </span>
          )}
          {lost && <span>Sorry, You've lost</span>}
        </p>
        <p>
          <button type="button" onClick={onClick}>
            Play again
          </button>
        </p>
      </article>
      <div className="modal-screen"></div>
    </section>
  );
}
