//
//  main.js
//
//  A project template for using arbor.js
//

var phptreeinit = false;

Reveal.addEventListener('phptree', function() {
    if (!phptreeinit) {
	var sys = arbor.ParticleSystem(1000, 600, 0.5) // create the system with sensible repulsion/stiffness/friction
	sys.parameters({gravity:true}) // use center-gravity to make the graph settle nicely (ymmv)
	sys.renderer = Renderer("#phpview") // our newly created renderer will have its .init() method called shortly by sys...
	
	// add some nodes to the graph and watch it go...
	// Signatures de 2F7956BC5DA04B5D (clé signant le livrable)
	sys.addNode('2F7956BC5DA04B5D', {color:'red'});
	sys.addNode('0ADE5CA286F33DD3', {color:'orange'});
	sys.addNode('7DEC4E69FC9C83D7', {color:'orange'});
	sys.addNode('C13C70B87267B52D', {color:'orange'});
	sys.addEdge('0ADE5CA286F33DD3', '2F7956BC5DA04B5D', {directed:true});
	sys.addEdge('7DEC4E69FC9C83D7', '2F7956BC5DA04B5D', {directed:true});
	sys.addEdge('C13C70B87267B52D', '2F7956BC5DA04B5D', {directed:true});
	
	// Signatures de 0ADE5CA286F33DD3
	sys.addNode('4C7091AF84666AB1', {color:'grey'});
	sys.addNode('7882DF785CDEEE2D', {color:'grey'});
	sys.addEdge('4C7091AF84666AB1', '0ADE5CA286F33DD3', {directed:true});
	sys.addEdge('7882DF785CDEEE2D', '0ADE5CA286F33DD3', {directed:true});
	
	// Signatures de 7DEC4E69FC9C83D7
	sys.addNode('37D1E86CBCB2094F', {color:'black'});
	sys.addEdge('37D1E86CBCB2094F', '7DEC4E69FC9C83D7', {directed:true});
	sys.addEdge('C13C70B87267B52D', '7DEC4E69FC9C83D7', {directed:true});
	
	// Signatures de 0xC13C70B87267B52D
	sys.addNode('5DF51732029A51A2', {color:'black'});
	sys.addEdge('5DF51732029A51A2', 'C13C70B87267B52D', {directed:true});
	sys.addEdge('7DEC4E69FC9C83D7', 'C13C70B87267B52D', {directed:true});

	phptreeinit = true;
    }
});
