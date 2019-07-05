const sam1 = {
	name: 'sam',
	age: 4,
}

const sam2 = {
	name: 'Sam',
	classification: {
		kingdom: 'Animalia',
		Phylum: 'Chordae',
		class: 'Mammalia',
		Order: 'Carnivoria',
		family: 'Felidae',
		species: 'Catus',
	},
}

console.log(sam1)
console.log(sam2)

const s = "hello"
s.toUpperCase()   // HELLO 
console.log(s.toUpperCase())

const a1 = [1, 2, 3, 4, 5]

const a2 = [1, 'two', 3, null]

const a3 = [
	"Am extra happy today",
	"This nigga is the illest",
	"hahahajajajj",
	"This is it",
]

const a4 = [
	{name: 'Ruby', hardness: 9},
	{name: 'Diamond', hardness: 10},
	{name: 'Topaz', hardness: 8},
]
a4.length
const a5 = [
	[1,2,5],
	[1,8,6],
	[1,0,6],
]
console.log(a4.length)
console.log(a1, a2, a3, a4, a5)
console.log(a3[a3.length-2])

const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/
console.log(email)