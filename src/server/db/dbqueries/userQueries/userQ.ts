import { Query } from '../../index';
import { UsersTable, MysqlResponse } from "../../models"

const getUser = (id: number) => Query('SELECT users.username, users.email, users.password FROM users WHERE id = ?', [id]);

const find = (column: string, value: string) => Query<UsersTable[]>("SELECT * FROM users WHERE ?? = ?", [column, value]); // column is a general use that picks whatever column you are trying to get. email, name, password, etc

const insert = (newUser: {email: string, username: string, password: string}) => Query<MysqlResponse>("INSERT INTO users SET ?", newUser);

export default {
    find,
    insert,
    getUser
}
