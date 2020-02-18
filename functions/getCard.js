function getCard() {
  const cardValues = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
  const cardSuits = ['clubs', 'spades', 'hearts', 'diamonds'];

  const randomValue = Math.floor(Math.random() * cardValues.length);
  const randomSuit = Math.floor(Math.random() * cardSuits.length);

  const result = {
    value: cardValues[randomValue],
    suit: cardSuits[randomSuit]
  }

  return result;
}

// another way

function pick(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function getCard() {
  const cardValues = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
  const cardSuits = ['clubs', 'spades', 'hearts', 'diamonds'];

  return {
    value: pick(cardValues),
    suit: pick(cardSuits)
  };
}