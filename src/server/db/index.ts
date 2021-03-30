import * as mysql from 'mysql';
import examples from './dbqueries/exampleQ'



export const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "example",
    password: "Example123",
    database: "example"
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
    examples
}