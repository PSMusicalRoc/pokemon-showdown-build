const {compile} = require("nexe");

compile({
	input: "./pokemon-showdown",
	output: "./nexe-pokemon-showdown",
	target: "linux-x64-16.20.2",
	build: true,
	loglevel: "verbose"
}).then( () => {
	console.log("NEXE BUILD SUCCESS");
}).catch( (res) => {
	console.log(`NEXE BUILD FAILURE: ${res}`);
});
