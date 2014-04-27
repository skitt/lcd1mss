//
//  main.js
//
//  A project template for using arbor.js
//

var linuxplustreeinit = false;

Reveal.addEventListener('linuxplustree', function() {
    if (!linuxplustreeinit) {
	var sys = arbor.ParticleSystem(1000, 600, 0.5) // create the system with sensible repulsion/stiffness/friction
//	sys.parameters({gravity:true}) // use center-gravity to make the graph settle nicely (ymmv)
	sys.renderer = Renderer("#linuxplusview") // our newly created renderer will have its .init() method called shortly by sys...
	
	sys.graft({
	    nodes:{
		'00411886': {color:'red'},
		'6092693E': {color:'red'},
		'C095D941': {color:'orange'},
		'947897D8': {color:'orange'},
		'95861109': {color:'orange'},
		'765E435D': {color:'orange'},
		'40AD1FA6': {color:'orange'},
		'151DFFDC': {color:'black'},
		'49881AD3': {color:'black'},
		'C0143D2D': {color:'black'},
		'00000011': {color:'black'},
		'A36B494F': {color:'green'},
		'Vous': {color:'lightgreen'}
	    },
	    edges:{
		'6092693E':{
		    '00411886': {directed:true},
		    '40AD1FA6': {directed:true},
		    '765E435D': {directed:true}
		},
		'00411886':{
		    '6092693E': {directed:true},
		    '00000011': {directed:true},
		    '765E435D': {directed:true},
		    '947897D8': {directed:true},
		    'C095D941': {directed:true}
		},
		'C095D941':{
		    '00411886': {directed:true},
		    '6092693E': {directed:true},
		    '00000011': {directed:true},
		    'C0143D2D': {directed:true},
		    '151DFFDC': {directed:true},
		    '40AD1FA6': {directed:true},
		    '947897D8': {directed:true}
		},
		'947897D8':{
		    '00411886': {directed:true},
		    'C0143D2D': {directed:true},
		    '49881AD3': {directed:true},
		    '40AD1FA6': {directed:true},
		    '95861109': {directed:true},
		    'C095D941': {directed:true}
		},
		'95861109':{
		    '00411886': {directed:true},
		    '6092693E': {directed:true},
		    '49881AD3': {directed:true},
		    '947897D8': {directed:true}
		},
		'765E435D':{
		    '00411886': {directed:true},
		    '6092693E': {directed:true},
		    '00000011': {directed:true}
		},
		'40AD1FA6':{
		    '6092693E': {directed:true},
		    'C0143D2D': {directed:true},
		    '49881AD3': {directed:true},
		    '947897D8': {directed:true},
		    'C095D941': {directed:true},
		},
		'151DFFDC':{
		    'C095D941': {directed:true},
		    'A36B494F': {directed:true},
		    '00000011': {directed:true},
		    'C095D941': {directed:true}
		},
		'49881AD3':{
		    '947897D8': {directed:true},
		    '40AD1FA6': {directed:true},
		    'A36B494F': {directed:true},
		    'C0143D2D': {directed:true},
		    '151DFFDC': {directed:true},
		    '40AD1FA6': {directed:true},
		    '95861109': {directed:true},
		    '947897D8': {directed:true}
		    },
		'C0143D2D':{
		    '95861109': {directed:true},
		    'A36B494F': {directed:true},
		    '49881AD3': {directed:true},
		    '151DFFDC': {directed:true},
		    '40AD1FA6': {directed:true},
		    '95861109': {directed:true},
		    '947897D8': {directed:true},
		    'C095D941': {directed:true}
		},
		'00000011':{
		    '765E435D': {directed:true},
		    'A36B494F': {directed:true},
		    '151DFFDC': {directed:true},
		    '765E435D': {directed:true},
		    'C095D941': {directed:true}
		},
		'A36B494F':{
		    '151DFFDC': {directed:true},
		    '49881AD3': {directed:true},
		    'C0143D2D': {directed:true},
		    '00000011': {directed:true},
		    'Vous': {directed:true}
		},
		'Vous':{
		    'A36B494F': {directed:true}
		}
	    }
	});

	linuxplustreeinit = true;
    }
});
