const listCategory = document.querySelectorAll('.item');
// console.log(listCategory);

console.log(`Number of categories: ${listCategory.length}`);

// for (const itemCategory of listCategory){
//     const itemName = itemCategory.children;
//     // console.log(itemCategory);
//     const listItem = itemCategory.querySelectorAll('ul');
//     // console.log(listItem);
//     const listNames = listItem[0].children;
//     // console.log(listNames);
//     console.log(`Category: ${itemName[0].outerText}\n Elements: ${listNames.length}`);
// };

listCategory.forEach(function (itemCategory) {
    const itemName = itemCategory.children;
    const listItem = itemCategory.querySelectorAll('ul');
    const listNames = listItem[0].children;
    console.log(`Category: ${itemName[0].textContent}\n Elements: ${listNames.length}`);
  });

