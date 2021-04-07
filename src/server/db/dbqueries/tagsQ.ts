import { Query } from '../index';

const allTags = () => Query('SELECT * FROM tags');

const oneTag = (id: number) => Query('SELECT * FROM tags WHERE id = ?', [id]);

const postTag = (postedTag: {name: string}) => Query('INSERT INTO tags SET ?', [postedTag]);

const deleteTag = (id: number) => Query('DELETE FROM tags WHERE id = ?', [id])


export default {
    allTags,
    oneTag,
    postTag,
    deleteTag
}