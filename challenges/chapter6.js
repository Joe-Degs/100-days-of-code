function getSentence({subject, verb, object}) {
	return `${subject} ${verb} ${object}.`;
}

const o = {
	subject: 'He',
	verb: 'dislikes',
	object: 'bullshit'
}

console.log(getSentence(o));

function addPrefix (prefix, ...words) {
	const prefixedWords = [];
	for (let i=0;i<words.length;i++){
		prefixedWords[i] = prefix + words[i];
	}
	return prefixedWords
}

console.log(addPrefix('con', 'verse', 'vex', 'shakara', 'ni'));