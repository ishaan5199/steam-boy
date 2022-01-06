const chalk = require('chalk');
const table = require('table');

const userAchievements = async (steam, vars, loading, id) => {
    
    const achievements = await steam.getUserAchievements(vars.steamID, id);
    
    loading.stop();

    var data = [];
    (achievements.achievements).map(element => {
        if(element.achieved){
            let desc = element.description === "" ? "None" : element.description;
            data.push([element.name, desc]);
        }
    })


    /* table config */
    const config = {
        columns: {
            0: {
                verticalAlignment: "middle",
                width: 40
            },
            1: {
                width: 70
            },
        },
        
    }

    /* text config */
    var dataTable = chalk.bold.green(table.table([["Name", "Description"]], config)) + table.table(data, config);
    return [dataTable, achievements.gameName];
}

module.exports = userAchievements;