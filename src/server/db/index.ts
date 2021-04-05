import * as mysql from 'mysql';
import business from '../db/dbqueries/businessQ';
import reviews from '../db/dbqueries/reviewsQ';
import locations from '../db/dbqueries/locationQ';
import hours from '../db/dbqueries/hoursQ';
import tags from '../db/dbqueries/tagsQ';
import businessTags from '../db/dbqueries/businessTagsQ';
import userTags from '../db/dbqueries/userTagsQ';
import user from '../db/dbqueries/userQueries/userQ';
import vendor from '../db/dbqueries/vendorQueries/vendorQ';


export const pool = mysql.createPool({
    host: 'localhost',
    user: 'foodya_app',
    password: 'foodya_app_pw',
    database: 'foodya'
})


export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {

        const sql = mysql.format(query, values);


        pool.query(sql, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })

    })
}


export default { 
    business,
    reviews,
    locations,
    hours,
    tags,
    businessTags, 
    userTags,
    user,
    vendor
}



