import * as neo4j from "neo4j-driver";

export class DatabaseConnection {

  private static _connection: any;
  private static _credentials: any;
    
  get connection() {
    if (!DatabaseConnection._connection) {
      if (DatabaseConnection._credentials) {
        const creds = DatabaseConnection._credentials;
        DatabaseConnection._connection = neo4j.driver(creds.endpoint, creds.authToken, {});
      }
    }
    return DatabaseConnection._connection;
  }

  set credentials(credentials: object) {
    DatabaseConnection._credentials = credentials;
  }
}
