const o = {
	name: 'Julie Hello how are you',
	greetBackwards: function () {
		const getReserveName = () => {
			let nameBackwards = '';
			for(let i=this.name.length-1; i>=0; i--) {
				nameBackwards += this.name[i];
			}
			return nameBackwards;	
		}
		return getReserveName();
	},
};
console.log(o.greetBackwards());