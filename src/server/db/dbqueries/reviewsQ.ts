import { Query } from '../index';


const allReviews = () => Query('SELECT reviews.*, users.username FROM reviews JOIN users on users.id = reviews.userid');

const oneReview = (id: number) => Query('SELECT reviews.*, users.username FROM reviews JOIN users on users.id = reviews.userid WHERE reviews.id = ?', [id])

const insertReview = (postReview: {userid: number, businessid: number, starreview: number, content: string, username: string}) => Query('INSERT INTO reviews SET ?', [postReview]);

const deleteReview = (id: number) => Query('DELETE FROM reviews WHERE id =?', [id]);







export default {
    allReviews,
    oneReview,
    insertReview,
    deleteReview
}