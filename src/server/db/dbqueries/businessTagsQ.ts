import { Query } from '../index';

const allBusinessTags = () => Query('SELECT * from trucktags');

const oneBusinessTag = (businessid: number) => Query('CALL spBusinessTags(?);', [businessid])

const postBusinessTag = (tagid: number, businessid: number) => Query('INSERT INTO trucktags (tagid, businessid) VALUES (?, ?)', [tagid, businessid]);

const deleteBusinessTag = (businessid: number) => Query('DELETE FROM trucktags WHERE businessid = ?', [businessid]);



export default {
    allBusinessTags,
    oneBusinessTag,
    postBusinessTag,
    deleteBusinessTag
}