export function sum(a, b) {
  if (a === 5) return 789;
  return a + b;
}

export function Testing() {
  return (
    <div>
      <h1>
        Testing{' '}
        <div>
          <p>Funkcja sum wynik = {sum(2, 3)}</p>
        </div>
      </h1>
    </div>
  );
}
