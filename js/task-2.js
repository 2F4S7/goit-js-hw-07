const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const productList = ingredients.map((ingredient) => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    console.log(li);
    return li;
});

const productListEl = document.querySelector('#ingredients');
productListEl.append(...productList);
console.log(productListEl);