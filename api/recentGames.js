const chalk = require('chalk');

const recentGames = async (steam, vars, loading) => {
    
    const games = await steam.getUserRecentGames(vars.steamID);
    
    loading.stop();

    var data = "";
    games.map(element => {
        data += chalk`{green.bold \n${element.name}\n}`;
    })
    
    return data;

}

module.exports = recentGames;