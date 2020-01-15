import {BASE_URL} from "../Config";
import axios from 'axios';

export default class ApiService {
    constructor() {
        this.baseUrl = BASE_URL;
    }
    getAllTrees() {
        return axios.get(`${this.baseURL}/AllTrees`);
    }
    getAllRegions() {
        return axios.get(`${this.baseURL}/AllRegions`);
    }

    deleteTree(treeID) {
        return axios.post(`${this.baseURL}/deleteTree`, { params:{ drvo: treeID }});
    }

    setNewStatistics(regId, treeId, plantNum, cutsNum, plantSpace, cutsSpace) {
        return axios.post(`${this.baseURL}/newStatistics`,
        { params:{ region: regId, drvo: treeId, brPosecena: cutsNum, brZasadjena: plantNum, povrsPosecena: cutsSpace, povrsZasadjena: plantSpace }});
    }
    setNewTreeAndStatistics(typeId, name, regId, plantNum, cutsNum, plantSpace, cutsSpace) {
        return axios.post(`${this.baseURL}/newTreeAndStatistics`,
        { params:{ tip: typeId, naziv: name, region: regId, brPosecena: cutsNum, brZasadjena: plantNum, povrsPosecena: cutsSpace, povrsZasadjena: plantSpace }});
    }
}