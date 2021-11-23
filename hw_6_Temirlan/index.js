//HW1
//1
let name = prompt('Укажите имя');
let surname = prompt('Укажите фамилию');
alert('Приветствую ' + name + ' '+ surname + '!')
console.log('Приветствую ' + name + ' '+ surname + '!')

//2
let number0 = 2189855.456;
let number1 = 2135135.01;

if (number0 < number1) {
    console.log(number1 + ' больше чем ' + number0)
} else if (number0 === number1) {
    console.log(number1 + ' и ' + number0 + ' равны')
} else {
    console.log(number0 + ' больше чем ' + number1)
}

//3
const age = prompt('укажи возраст')

if (age <= 16) {
    alert('Ты школьник')
} else if (age > 16 && age <= 18) {
    alert('Ты либо школьник, либо студент')
} else {
    alert('Ты либо студент, либо работаешь')
}

//HW2
// 1
const arr = [1232, -132, 356, 2123, 2.5, 23, 12];

const sum = (...numbers) => {
    let sum = 0
    numbers.forEach(num => sum += num)
    return sum
}
console.log(sum(...arr))

//2
for (let i = 2; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//3
let people = [
    {
        name: 'Adilet',
        salary: 23000
    },
    {
        name: 'Syimyk',
        salary: 59000
    },
    {
        name: 'Meerim',
        salary: 38000
    },
    {
        name: 'Nurdin',
        salary: 15000
    }
]

for (let i = 0; i < people.length; i++) {
    if (people[i].name === 'Nurdin') {
        people[i].salary += 2000
    } else people[i].salary += 1000
}
// console.log(people)

//4
for (let i = 0; i < people.length; i++) {
    if (people[i].salary <= 20000) {
        people[i].level = "junior"
    } else if (people[i].salary <= 50000) {
        people[i].level = "middle"
    } else people[i].level = "senior"
}

console.log(people)

//HW3
//1
const min = (num1, num2) => {
    if (num1 < num2) {
        console.log(num1)
    } else {
        console.log(num2)
    }
}

min(4651, 4532)

//2
const countChar = (word, letter) => {
    let counter = ''
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) counter += word[i]
    }
    console.log(counter.length)
}

countChar('AaaHHHhhhHKKKKKkkkkkkSSSSsss', 'a')

//3
let products = [
    {
        productName: 'milk',
        cost: 48
    },
    {
        productName: 'bread',
        cost: 20
    },
    {
        productName: 'egg',
        cost: 11
    },
]

const addProduct = (productName, cost) => products.push({
    productName: productName,
    cost: cost,
})

addProduct('cookies', 5)
addProduct('candies', 7)
console.log(products)

//HW4
let bestPeople = [
    {
        name: 'Nazira',
        salary: 34600
    },
    {
        name: 'Meerim',
        salary: 38000
    },
    {
        name: 'Firdavs',
        salary: 47263
    },
    {
        name: 'Nurdin',
        salary: 15000
    },
    {
        name: 'Temirlan',
        salary: 58456
    },
    {
        name: 'Semen',
        salary: 56654
    },
    {
        name: 'Syimyk',
        salary: 76543
    },
    {
        name: 'Luisa',
        salary: 59452
    },
    {
        name: 'Kutman',
        salary: 63213
    },
    {
        name: 'Luisa',
        salary: 59452
    },
    {
        name: 'Chyngyzhan',
        salary: 23459
    },
    {
        name: 'Aliya',
        salary: 45697
    }
]

//1
const s = bestPeople.filter(people => people.name.substr(0, 1) === 'S');
console.log(s)


//2
const dollar = bestPeople.map(convert => convert.salary /= 84.79)
console.log(bestPeople)


//3
const total = bestPeople.reduce((summ, people) => people.salary + summ, 0)
console.log(total)