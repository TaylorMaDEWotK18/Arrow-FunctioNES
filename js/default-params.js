function sayGreeting(greeting = 'Good morna', name = 'Taylor') {
  return `${greeting} ${name}!`;
}

function getArea(width = 5, length = 6, unit = 'sq ft') {
  const area = width * length;
  return `${area} ${unit}`;
}

function greetMe(greet = 'Hello there', name = 'Kenobi') {
  return `${greet}, ${name}...`;
}
