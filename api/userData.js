const chalk = require('chalk');

const userData = async (steam, vars, loading, externalID) => {
    
    var steamID = vars.steamID;
    if(externalID !== ""){
        steamID = externalID;
    }
    const summary = await steam.getUserSummary(steamID);
    
    loading.stop();

    const data = chalk`\n{green.bold Nickname} : ${summary.nickname}
    \n{green.bold Real Name} : ${summary.realName}
    \n{green.bold Profile URL} : ${summary.url}
    \n{green.bold Country} : ${summary.countryCode}
    \n{green.bold Currently Playing} : ${summary.gameExtraInfo ? (summary.gameExtraInfo + ", " + summary.gameID) : "None"}\n`; 
    
    return [data, summary];

}

module.exports = userData;