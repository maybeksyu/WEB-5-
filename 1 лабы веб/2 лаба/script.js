let rad = parseFloat(prompt("Введите длину первого катета:", ""));

if (isNaN(rad)) {
  alert("Ошибка: пожалуйста, введите корректное числовое значения для радиуса.");
} 
else {
  let S = 2 * rad * 3.14;
  S = S.toFixed(2);

  if (
    confirm(
      `Радиус = ${rad}`
    )
  ) {
    alert(`Площадь круга = ${S}`);
  } else {
    alert("Вы отменили вычисление.");
  }
}