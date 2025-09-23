export function shuffleArray<T>(arr: T[]) {
  const copy = [...arr]; // to avoid mutating original
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // pick random index
    [copy[i], copy[j]] = [copy[j], copy[i]]; // swap
  }
  return copy;
}

export function getRandomObjects<T>(arr: T[], count: number) {
  const copy = [...arr];
  if (count > arr.length) return copy;
  const selected = [];
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * copy.length);
    selected.push(copy.splice(index, 1)[0]);
  }
  return selected;
}
