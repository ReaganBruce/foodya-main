import { Query } from '../index';


const getAllExamples = () => Query('SELECT examples.*, locationexamples.location FROM examples JOIN locationexamples ON locationexamples.id = examples.locationid');



export default {
    getAllExamples
}