const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: false,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	id: {
		type: `string`,
		alias: `i`,
		desc: `game ID`
	}
};

const commands = {
	help: { desc: `Print help info` },
	
	empty: { desc: `Get Basic steam user info`},
	games: { desc: `Get games owned by you`},
	ach: { desc: `Get list of achievements, enter game ID via the "-i" option (game ID can be obtained by looking up "games" command) (if no gameID is passed, by default the most played game will be chosen)`},
	rec: { desc: `Get recently played games`},
	fr: { desc: `Get a list of friends on steam`}
};

const helpText = meowHelp({
	name: `sb`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
