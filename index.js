#!/usr/bin/env node

/**
 * steam-boy
 * steam account details in terminal
 *
 * @author Ishaan Mahesh <https://github.com/ishaan5199>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const vars = require('./package.json');
const SteamAPI = require('steamapi');
const ora = require('ora');
const chalk = require('chalk');

/* api endpoints */
const userData = require('./api/userData');
const userGames = require('./api/ownedGames');
const userAchievements = require('./api/userAchievements');
const recentGames = require('./api/recentGames');
const userFriends = require('./api/userFriends');

/* loading animation */
const loading = ora("Fetching Info!");
loading.color = "green";

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;
var globalGameData = [];

/* entrypoint */
(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	loading.start();
	const steam = new SteamAPI(vars.apiKey);


	/* error handling */
	try{
		const testing = await steam.getUserOwnedGames(vars.steamID);
		testing.forEach(element => {
			globalGameData.push([element.name, (element.playTime / 60).toFixed(1), element.appID]);
		});
		globalGameData = globalGameData.sort((a, b) => (b[1] - a[1]));
		
	}catch(e){
		loading.stop();
		console.log(chalk.bold.bgRed("\n\nAPI key or user ID is invalid!\n"));
		return;
	}

	
	const additionalInputs = input;
	
	/* processing command line arguments */
	switch (additionalInputs[0]) {
		case "games":
			const games = await userGames(globalGameData, loading);
			console.log(chalk.bold("Games owned by the user =>"));
			console.log(games);
			break;

		case "ach":
			const appID = flags.id ? flags.id : globalGameData[0][2];
			const data = await userAchievements(steam, vars, loading, appID);
			const gameName = data[1]; 
			const achievements = data[0]; 
			console.log(chalk.bold(`Achievements earned in ${gameName} =>`));
			console.log(achievements);
			break;

		case "rec":
			const recGames = await recentGames(steam, vars, loading);
			console.log(chalk.bold("Recently Played Games =>"));
			console.log(recGames);
			break;

		case "fr":
			const friends = await userFriends(steam, vars, loading);
			console.log(chalk.bold("Friends =>"));
			console.log(friends);
			break;

		default:
			const userDat = await userData(steam, vars, loading, "");
			const user = userDat[0];
			console.log(chalk.bold("User Details =>"));
			console.log(user);
			break;
	}
	
	debug && log(flags);
})();

module.exports = globalGameData;