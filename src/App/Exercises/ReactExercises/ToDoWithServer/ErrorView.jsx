export const ErrorView = () => {
  return (
    <div className="error">
      <div className="msg">
        <h2>Przepraszamy. Nie udało się pobrać listy zadań</h2>
      </div>
      <button className="refresh">Odświez widok</button>
      {/* usuwamy aktualne errory*/}
      {/*i podbieramy todo */}
    </div>
  );
};
