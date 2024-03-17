const obj = receipt()

console.log(obj);
var objects = ''
var sum = 0
var d = 15000
for (const key in obj) {
    objects += `${key} ${obj[key].info} `
    sum += obj[key].price 
  }
  
  console.log('Вы заказали: ' + objects + '| Общая стоимость ' + sum + ' с учетом доставки (15000) ' + 'Итого: ' + (sum + d));