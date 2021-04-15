import { Query } from '../../index';
import { UsersTable, MysqlResponse } from "../../models"

const getUser = (username: string) => Query('SELECT users.* FROM users WHERE username = ?', [username]);

const find = (column: string, value: string) => Query<UsersTable[]>("SELECT * FROM users WHERE ?? = ?", [column, value]); // column is a general use that picks whatever column you are trying to get. email, name, password, etc

const insert = (newUser: {email: string, username: string, password: string}) => Query<MysqlResponse>("INSERT INTO users SET ?", newUser);

const destroy = (username: string) => Query("DELETE FROM users WHERE username = ?", [username]);

export default {
    find,
    insert,
    getUser,
    destroy
}
