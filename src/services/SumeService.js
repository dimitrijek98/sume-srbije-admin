import ApiService from "./ApiService";
import axios from 'axios';
import { BASE_URL } from "../Config";

export default class SumeService extends ApiService {
    constructor(props){
        super(props);
        this.baseURL = BASE_URL;
    }
    getAllTrees() {
        return axios.get(`${this.baseURL}AllTrees`);
    }
    getAllRegions() {
        return axios.get(`${this.baseURL}AllRegions`);
    }

    deleteTree(treeID) {
        return axios.post(`${this.baseURL}deleteTree`, {drvo: treeID });
    }

    setNewStatistics(regId, treeId, plantNum, cutsNum, plantSpace, cutsSpace) {
        return axios.post(`${this.baseURL}newStatistics`,
        { region: regId, drvo: treeId, brPosecena: cutsNum, brZasadjena: plantNum, povrsPosecena: cutsSpace, povrsZasadjena: plantSpace });
    }
    setNewTreeAndStatistics(typeId, name, regId, plantNum, cutsNum, plantSpace, cutsSpace) {
        return axios.post(`${this.baseURL}newTreeAndStatistics`,
        {  tip: typeId, naziv: name, region: regId, brPosecena: cutsNum, brZasadjena: plantNum, povrsPosecena: cutsSpace, povrsZasadjena: plantSpace });
    }
}