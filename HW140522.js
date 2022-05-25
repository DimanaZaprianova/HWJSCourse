let manHeight;
let manWeight;
let BMI;
manHeight = 1.95;
manWeight = 95;
BMI = manWeight/manHeight**2;

console.log(`The BMI is: ${(BMI).toFixed(2)}.`);

if (BMI < 16) {
    console.log('Пациентът е в с поднормено тегло състояние на тежко недохранване.')
}
else if (16 <= BMI && BMI <= 16.99) {
    console.log('Пациентът е с поднормено тегло в състояние на средно недохранване.')
}
else if (17 <= BMI && BMI <= 18.49) {
    console.log('Пациентът е с поднормено тегло в състояние на леко недохранване.')
}
else if (18.50 <= BMI && BMI <= 24.99) {
    console.log('Пациентът е с нормално тегло.')
}
else if (25 <= BMI && BMI <= 29.99) {
    console.log('Пациентът е с наднормено тегло в състояние на предзатлъстяване.')
}
else if (30 < BMI && BMI < 34.99) {
    console.log('Пациентът е с наднормено тегло в състояние на затлъстяване I степен.')
}
else if (35 <= BMI && BMI <= 39.99) {
    console.log('Пациентът е с наднормено тегло в състояние на затлъстяване II степен.')
}
else {
    console.log('Пациентът е с наднормено тегло в състояние на затлъстяване III степен.')
}