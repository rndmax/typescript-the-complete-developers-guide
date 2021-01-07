const carMakers = ['ford', 'toyota', 'chevy'];
const carMakers2: string[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [['mustang'], ['corola'], ['aveo']];
const carsByMake2: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible valuers
carMakers.push(100); //error

// Help with 'map' etc.
carMakers.map((car: string): string => {
	return car.toLocaleUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
