// Feeds the cursor position into a card's --mx / --my CSS variables,
// which drive the radial glow defined on `.card::before` in index.css.
export function handleSpotlight(event) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();

  card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  card.style.setProperty("--my", `${event.clientY - rect.top}px`);
}
