import { Query } from '../index';

//GET ALL BUSINESS
const allBusinessess = () => Query('SELECT business.*, location.address, location.city, location.zip_code, location.country, location.state, hours.hours_type, hours.is_overnight, hours.start, hours.end, hours.hours_type, hours.is_open_now FROM business JOIN location ON location.id = business.locationid JOIN hours ON hours.id = business.hoursid')

//GET BUSINESS BY ID
const singleBusiness = (id: number) => Query('SELECT business.*, location.address, location.city, location.zip_code, location.country, location.state, hours.hours_type, hours.is_overnight, hours.start, hours.end, hours.hours_type, hours.is_open_now FROM business JOIN location ON location.id = business.locationid JOIN hours ON hours.id = business.hoursid WHERE business.id = ?', [id])

//POST BUSINESS
const insertBusiness = (addBusiness: {
    vendorid?: number, categoriesid?: number, locationid?: number, hoursid?: number, 
    name: string, image_url?: string, phone?: string, display_phone?: string, rating?: number
}) => Query('INSERT INTO business SET ?', [addBusiness])

//UPDATE BUSINESS BY ID
const updateBusiness = (updatedBusiness: {
    name: string, image_url?: string, phone?: string, display_phone?: string, rating?: number}, 
    id: number) => Query('UPDATE business SET ? WHERE id = ?', [updatedBusiness, id])

//DELETE BUSINESS BY ID
const deleteBusiness = (id: number) => Query('DELETE FROM business WHERE id = ?', [id])




export default {
    allBusinessess,
    singleBusiness,
    insertBusiness,
    updateBusiness,
    deleteBusiness
}