function ExtractCapitalCaseWords(strArr) {
	var capitalWords = [];
	for (var sentence of strArr) {
		var words = sentence.split(/\,|\.|\#|\s/)
		for (var word of words) {
			var upperWord = word.toUpperCase();
			if (word === upperWord && word.length != 0) {
				capitalWords.push(word);
			}
		}
	}
	console.log(capitalWords.join(', '));
}

//tuk ima split po regex :) i filtracia na empty entries :)
function solution(arr) {
	let text = arr.join(" ");
	let words = text.split(/\W+/).filter(x => x.length != 0);
	let result = [];
	for (let word of words) {
		if (word == word.toUpperCase()) {
			result.push(word);
		}
	}
	console.log(result.join(", "));
}

ExtractCapitalCaseWords(
	['We start by HTML, CSS, JavaScript, JSON and REST.',
		'Later we touch some PHP, MySQL and SQL.',
		'Later we play with C#, EF, SQL Server and ASP.NET MVC.',
		'Finally, we touch some Java, Hibernate and Spring.MVC.'
	]
)