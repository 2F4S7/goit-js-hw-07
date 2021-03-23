const summItemsEl = document.querySelectorAll(".item");
console.log(summItemsEl);
const viewCategories = () =>
    console.log(`В списке ${summItemsEl.length} категории.`);
viewCategories(summItemsEl);

const viewCategory = summItemsEl.forEach((item) => {
    const categoriesItemEl = item.querySelectorAll("li");
    console.log(`Ктегория: ${item.firstElementChild.textContent}
    Количество элементов: ${categoriesItemsEl.length}`);
});