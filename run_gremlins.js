gremlins.createHorde()
	.gremlin(gremlins.species.clicker())
	.gremlin(gremlins.species.formFiller())
	.gremlin(gremlins.species.scroller())
	.mogwai(gremlins.mogwais.gizmo())
	.mogwai(gremlins.mogwais.fps())
	.strategy(gremlins.strategies.distribution()
		.delay(50)
		.distribution([
			0.3, // clicker
			0.3, // formFiller
			0.3, // todoCreator
			0.1, // scroller
		])
	)
	.unleash({ nb: 200 });
