import { Query } from '../index';


//GET ALL HOURS
const getAllHours = () => Query('SELECT * FROM hours');


//GET HOUR BY ID
const getHour = (id: number) => Query('SELECT * FROM hours WHERE id = ?', [id])

//POST HOURS
const postHours = (postedHours: {
    is_overnight: boolean, start: string, end: string, hours_type: string, is_open_now: boolean
}) => Query('INSERT INTO hours SET ?', [postedHours]);

//UPDATE HOUR BY ID
const updateHours = (updatedHours: {
    is_overnight: boolean, start: string, end: string, hours_type: string, is_open_now: boolean
}, id: number) => Query('UPDATE hours SET ? WHERE id = ?', [updatedHours, id]);

//DELETE HOUR BY ID
const deleteHours = (id: number) => Query('DELETE FROM hours WHERE id = ?', [id]);

export default {
    getAllHours,
    getHour,
    postHours,
    updateHours,
    deleteHours
}



// CREATE TABLE hours (
// 	id INT NOT NULL AUTO_INCREMENT,
//     is_overnight BOOLEAN,
//     start VARCHAR(45) NULL,
//     end VARCHAR(45) NULL,
//     hours_type VARCHAR(25),
//     is_open_now BOOLEAN,
//     PRIMARY KEY (id)
// );