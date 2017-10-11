var num = Math.floor((Math.random() * 100)) + 1; 

var now = new Date();


var a = ['Xira','Kayama','Aziz','Myself (Alex)', 'Anyone else i didnt type'];

var teachers = {
	'Peter':"Peter's lastname",
	'Abe':'Abe\'s last name',
	'Mo':'Mo\'s last name'
}

function log(arg){
	console.log(arg);
}

function randInt(min, max){
	return Math.floor((Math.random() * max) + min);
}

function numberWords(n){
	var obj = {
		0:"Zero",
		1:"One",
		2:"Two",
		3:"Three",
		4:"Four",
		5:"Five",
		6:"Six",
		7:"Seven",
		8:"Eight",
		9:"Nine"
	}

var n = n.toString();

var nInWords = n.map(function(i){
		return obj[i]
	} );

	return (nInWords.join(" "));

}