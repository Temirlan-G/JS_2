var bestPeople = [
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

// function filterName(names) {
//     if (names.name.substr(0,1) === 'S') {
//         return true
//     }
//     return false
// }
//
// var nameWithS = bestPeople.filter(filterName)
//
// console.log(nameWithS)

var s = bestPeople.filter(people => people.name.substr(0,1) === 'S');
console.log(s)


//2
var dollar = bestPeople.map(convert => convert.salary / 84,79)
console.log(dollar)



//3
var total = bestPeople.reduce(function(summ, people) {
    return summ + people.salary;
  }, 0);
console.log(total)
