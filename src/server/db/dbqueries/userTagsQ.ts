import { Query } from '../index';


const userTags = () => Query('SELECT * FROM usertags')

const userTag = (userid: number) => Query('CALL spUserTags(?)', [userid]);

const postUserTag = (tagid: number, userid: number) => Query('INSERT INTO usertags (tagid, userid) VALUES (?, ?)', [tagid, userid]);

const deleteUserTag = (userid: number) => Query('DELETE FROM usertags WHERE userid = ?', [userid])



export default {
    userTags,
    userTag,
    postUserTag,
    deleteUserTag
}