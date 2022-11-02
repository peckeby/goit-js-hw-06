const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

ingredients.forEach(function(_, idx){
  const ingrItem = document.createElement('li');
  ingrItem.textContent = ingredients[idx];
  ingrItem.setAttribute("class", "item");
  list.append(ingrItem);
  return list
})

console.log(list);



