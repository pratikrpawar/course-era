var i,a,b;
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(i=0;i<10;i++) {
	a=names[i].charAt(0)
	b=a.toLowerCase();
	if (b=="j"){
		console.log("Good bye  "+names[i]);
	}
	else{
		console.log("Hello  "+names[i]);
	};

};
