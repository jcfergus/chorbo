const neo4j = require("neo4j-driver");

const Database = {
    database: undefined,
    createInstance: () => {
        Database.database = neo4j.driver()
    },
    getInstance: () => {
        if (Database.database) {
            return Database.database;
        } 
        
        return creat
    }

}

