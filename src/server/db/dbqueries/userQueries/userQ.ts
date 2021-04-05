import { Query } from '../../index';

const getUser = (id: number) => Query('SELECT users.username, users.email, users.password FROM users WHERE id = ?', [id]);

const postUser = (username: string, email: string, password: string) => Query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);


export default {
    getUser,
    postUser
}