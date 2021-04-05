import { Query } from '../index';

//GET ALL LOCATIONS
const allLocations = () => Query('SELECT * FROM location');

//GET LOCATION BY ID
const oneLocation = (id: number) => Query('SELECT * FROM location WHERE id = ?', [id]);

//POST LOCATIONS
const insertLocations = (postLocations: {
    address: string, city: string, zip_code: string, country: string, state: string, display_address: string}) => 
    Query('INSERT INTO location SET ?', [postLocations]);

//UPDATE LOCATIONS BY ID   
const updateLocation = (updateLocations: {
    address: string, city: string, zip_code: string, country: string, state: string, display_address: string
}, id: number) => Query('UPDATE location SET ? WHERE id = ?', [updateLocations, id]);

//DELETE LOCATION BY ID
const deleteLocation = (id: number) => Query('DELETE FROM location WHERE id = ?', [id]);



export default {
    allLocations,
    oneLocation,
    insertLocations,
    updateLocation,
    deleteLocation

}

