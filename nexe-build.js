const {compile} = require("nexe");

compile({
	input: "./pokemon-showdown",
	output: "./nexe-pokemon-showdown",
	resources: [ "./**/*" ],
	target: "linux-x64",
	build: true,
	loglevel: "verbose"
}).then( () => {
	console.log("NEXE BUILD SUCCESS");
}).catch( (res) => {
	console.log(`NEXE BUILD FAILURE: ${res}`);
});
