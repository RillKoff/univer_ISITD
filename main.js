const strMassive = prompt('Введите элементы массива через пробел')

const massive = strMassive.split('')

massive.forEach((item, index, array) => {
if (item === '' || item === ' ') {
array.splice(index, 1)
}
});
