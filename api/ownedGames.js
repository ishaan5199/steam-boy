const table = require('table');
const chalk = require('chalk');

const userGames = async (data, loading) => {

    loading.stop();

    /* table config */
    const config = {
        columns: {
            0: {
                width: 30
            },
            1: {
                alignment: "center",
                width: 15
            },
            2: {
                alignment: "center",
                width: 8
            }
        },
        
    }

    /* text config */
    var dataTable = chalk.bold.green(table.table([["Name", "Hours Played", "Game ID"]], config)) + table.table(data, config);
    return dataTable;

}

module.exports = userGames;