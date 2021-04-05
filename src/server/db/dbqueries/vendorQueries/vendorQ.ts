import { Query } from '../../index';

const getVendor = (id: number) => Query('SELECT vendors.email, vendors.password FROM vendors WHERE id = ?', [id])

const postVendor = (email: string, password: string) => Query('INSERT INTO vendors (email, password) VALUES (?, ?, ?) ', [email, password])

export default {
    getVendor,
    postVendor
}




