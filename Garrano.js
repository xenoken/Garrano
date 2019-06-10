let Garrano = 		{
	
	"eval" 					: eval,
	//"uneval"				: uneval,
	"Math"			:{
		"isFinite"			: isFinite,
		"isNan"				: isNaN,
		"parseFloat"		: parseFloat,
		"parseInt"			: parseInt,

	},
	"URI"			:{
		"decode" 			: decodeURI,
		"decodeComponent"	: decodeURIComponent,
		"encode"			: encodeURI,
		"encodeComponent"	: encodeURIComponent
	},
	"escape"				: escape,
	"unescape"				: unescape,
	"Functions"		:{
		"bind"				: function(o,f)				{	f.bind(o) 						;}
	},
	"Operators"		:{
		"identical"			: function(a,b) 			{ 	return a === b 					;},
		"equal"				: function(a,b) 			{ 	return a == b 					;},
	},
	"Bits"			:{
		"left"				: function(a,b)				{ 	return a << b 					;},
		"right"				: function(a,b)				{ 	return a >> b 					;},
		"rightu"			: function(a,b)				{ 	return a >>> b 					;},
		"and"				: function(a,b)				{ 	return a & b 					;},
		"or"				: function(a,b)				{ 	return a | b 					;},
		"xor"				: function(a,b)				{ 	return a ^ b 					;}
	},
	"Logic"			:{
		"and"				: function(a,b)				{ 	return a && b 					;},
		"or"				: function(a,b)				{ 	return a || b 					;},
		"ternary"			: function(t,f,c)			{ 	return c ? t : f  				;}
	},
	"Collections"	:{
		"Array"		:{
			"create_empty" 	: function() 				{	return []  					 	;},
			"create"		: function(...elems) 		{	return new Array(...elems) 	 	;},
			"item"			: function(arr,index) 		{	return arr[index] 			 	;},
			"for_each"		: function(arr,func) 		{	return arr.forEach(func)  	 	;},
			"add"			: function(arr,...elems) 	{	return arr.push(...elems)	 	;},
			"remove_last"	: function(arr) 			{	return arr.pop()  			 	;},
			"remove_first"	: function(arr) 			{	return arr.shift() 			 	;},
			"add_front"		: function(arr,v) 			{	return arr.unshift(v) 		 	;},
			"index_of" 		: function(arr,v) 			{	return arr.indexOf(v) 		 	;},
			"splice"		: function(arr,pos,l) 		{	return arr.splice(pos,l) 	 	;},
			"remove_at"		: function(arr,pos) 		{	return arr.splice(pos,1) 	 	;},
			"clone"			: function(arr) 			{	return arr.slice() 			 	;},
			"concat"		: function(arr,...values) 	{	return arr.concat(...values) 	;},
		},
	},
	"Types"			:{
		"isArray" 			: function(o) 				{	return Array.isArray(o) 		;}
	},
	"Prototype"		:{
		"get"				: function(o) 				{ 	return o.prototype 				;}
	}
}
