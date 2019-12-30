function makeNumber(str){
let arrayNum = [];
let array = str.split('');
let i;
for (i = 0; i < array.length; i++){
if (isNaN(array[i]) === false) {
	arrayNum.push(array[i]);
		}
	}
return arrayNum.join('');
}
makeNumber('fjhiu4y576rhg64283yedh');



