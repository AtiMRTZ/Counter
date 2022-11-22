
let countEl = document.getElementById ("count-el");
let saveEl = document.getElementById ("save-el");
let count = 0;

function increment(){
	count += 1;
	countEl.textContent = count;
	return count;
}



function save (){
	let countStr = count + " - ";
	saveEl.textContent += countStr;
	return countStr;
};

console.log (save());