function getMin(){
let array = [];
let i;
for (i = 0; i < arguments.length; i++) {
	array.push(arguments[i]);
}
let funcComp = function(a, b){
	return a - b;
} 
return array.sort(funcComp)[0];
}
getMin(3, 0, -3);





