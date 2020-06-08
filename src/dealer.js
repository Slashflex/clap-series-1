/*
 * /!\ À faire seul !
 * Le but de cette fonction est de générer deux tableaux contenants 5 cartes différentes
 * il ne doit y avoir aucun doublon dans les tableaux !
 *
 * Exemple dealer() => [['As', '3s', '2h', '8d', '8s'], ['As', '3s', '2h', '8d', '8s']]
 *
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 *
 */
function dealer() {
  const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const cardType = ["d", "c", "h", "s"];
  const combined = [];

  for (const value of cardValue) {
    for (const type of cardType) {
      combined.push(value + type);
    }
  }

  combined.sort(() => Math.random() - 0.5);
  return [combined.slice(0, 5), combined.slice(5, 10)]
}

export { dealer };