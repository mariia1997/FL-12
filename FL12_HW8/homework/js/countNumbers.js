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
function countNumbers(str){
let end = {};
makeNumber(str).split('').forEach(function(elem){
	if (end[elem] !== undefined) {
		++end[elem];
	} else {
		end[elem] = 1;
	}
})
return end;
}

countNumbers('hkduw5ny375ycfn8yr82rn7tq98q2r');



