//task1
function convert(...args) {
    let result = [];
    for (let arg of args) {
        if (typeof arg === 'number') {
            result.push(arg + '');
        } else if (typeof arg === 'string') {
            result.push(+arg);
        }
    }
    return result;
}


//task2
function executeforEach(arr, func) {
    const INDEX = 0;
    for (let i = INDEX; i < arr.length; i++) {
        func(arr[i]);
    }
}



//task3
function mapArray(arr, func) {
    let result = [];
    executeforEach(arr, item => {
        result.push(func(parseInt(item)))
    });
    return result;
}


//task4
function filterArray(array, func) {
    let result = [];
    for (let element of array) {
        if (func(element)) {
            result.push(element);
        }
    }
    return result;
}


//task5
function flipOver(str) {
    return str.split('').reverse().join('');
}

//task6
function makeListFromRange(array) {
    let result = [];
    for (let i = array[0]; i <= array[1]; i++) {
        result.push(i);
    }
    return result;
}

//task7
function getArrayOfKeys(arr, key) {
    const result = [];

    function returnKey(item) {
        result.push(item[key]);
    }
    executeforEach(arr, returnKey);

    return result;
}
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 },
    { name: 'john', age: 48 },
    { name: 'henry', age: 56 }
];



//task8
function substitude(arr) {
    let array = [];
    mapArray(arr, function(item) {
        const NUM = 30;
        if (item > NUM) {
            array.push(item);
        }
        array.push('*');
    })
    return array;
}


//task9
function getDateAgo(date, days) {
    let myDate = new Date(date);

    myDate.setDate(myDate.getDate() - days);

    return myDate.getDate()

}

//task10
function formatDate(inputDate) {
    const year = inputDate.getFullYear();
    const month = inputDate.getMonth();
    const day = inputDate.getDate();
    let hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();
    const NUM = 10;
    if (hours < NUM) {
        hours = '0' + hours;
    }
    return `${year}/${month}/${day} ${hours}:${minutes}`;
}