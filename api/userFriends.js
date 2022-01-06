const chalk = require('chalk');
const userData = require('./userData');
const table = require('table')

const userFriends = async (steam, vars, loading) => {
    
    const friends = await steam.getUserFriends(vars.steamID);
    
    loading.stop();

    var friendList = [];
    
    const resultArray = await Promise.all(friends.map(async (element) => {
        const data =  await userData(steam, vars, loading, element.steamID);
        return data[1];
    }));

    resultArray.map(element => {
        friendList.push([element.nickname, element.gameExtraInfo ? element.gameExtraInfo : "None"]);
    });

    /* table config */
    const config = {
        columns: {
            0: {
                width: 15
            },
            1: {
                alignment: "center",
                width: 30
            }
        },
        
    }

    /* text config */
    var dataTable = chalk.bold.green(table.table([["Name", "Currently Playing"]], config)) + table.table(friendList, config);
    return dataTable;

}

module.exports = userFriends;