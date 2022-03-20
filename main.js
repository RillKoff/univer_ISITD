const strMassive = prompt('Введите элементы массива через пробел')
const sdvig = prompt('Введите желаемый сдвиг')
const massive = strMassive.split('')

massive.forEach((item, index, array) => {
if (item === '' || item === ' ') {
array.splice(index, 1)
}
});
for(i = 0; i < sdvig; i++){
massive.unshift(massive.pop())
};

alert(massive)