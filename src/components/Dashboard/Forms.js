import React, { Component } from 'react';
import { regioni } from "../../Regioni";
import SumeService from "../../services/SumeService";

class Forms extends Component {
    constructor(props) {
        super(props);
        this.SumeService = new SumeService();
        this.state = {
            treesData: [],
            regionsData: [],
            treesSpaceData: [],
            brPos : 0,
            povrsPos: 0,
            brZas: 0,
            povrsZas: 0,
            treeName: '',
            regId: 0,
            treeId:0,
            tipId:0,
        }
    }
    componentDidMount = () => {
        this.getTrees();
        this.getRegions();
     }
 
    getTrees = () =>{
        this.SumeService.getAllTrees()
        .then(response => {
            let data = response.data.map(reg => {
                return {...reg}
            })
            this.setState({treesData:data});
        })
    }
    getRegions= () =>{
        this.SumeService.getAllRegions()
        .then(response => {
            let data = response.data.map(reg => {
                return {...reg}
            })
            this.setState({regionsData:data});
        })
    }
    deleteTree = (e) =>{
        this.SumeService.deleteTree(this.state.treeId)
        .then(response => {
            if(response.status === 200){
                alert("Drvo izbrisano!");
                this.props.history.push('/dashboard');
            }
        }
        );
    }
    addStats = (e) =>{
        this.SumeService.setNewStatistics(this.state.regId, this.state.treeId, this.state.brZas, this.state.brPos,this.state.povrsZas,this.state.povrsPos)
        .then(response => {
            if(response.status === 200){
                alert("Statisitka dodata.");
                this.props.history.push('/dashboard');
            }
        }
        );
    }
    addTree = (e) =>{
        this.SumeService.setNewTreeAndStatistics(this.state.tipId, this.state.treeName, this.state.regId, this.state.brZas, this.state.brPos,this.state.povrsZas,this.state.povrsPos)
        .then(response => {
            if(response.status === 200){
                alert("Statisitka dodata.");
                this.props.history.push('/dashboard');
            }
        }
        );
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };
    selectRegion = (e) => {
        let region = e.target.value;
        this.setState({regId: region});
    }
    selectTree = (e) => {
        let tree = e.target.value;
        this.setState({treeId : tree });
    }
    selectTip = (e) => {
        let tip = e.target.value;
        this.setState({tipId: tip });
    }
    render() {
        return (
            <div className='col-lg-10 forms'>
                <div className='header'>
                    <h2>{this.props.selected === '1' ? 'Nova statistika šume' : this.props.selected === '2' ? 'Novo drvo i statistika' : 'Uklanjanje drveta'}</h2>
                </div>
                <form>{this.props.selected === '1' ?
                    <div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>Region</label>
                                <select onChange={this.selectRegion} className="form-control">
                                    <option selected>Izaberite...</option>
                                    {this.state.regionsData.map(region => <option value={region.id}>{region.ime}</option>)}
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label>Drvo</label>
                                <select onChange={this.selectTree} className="form-control">
                                    <option selected>Izaberite...</option>
                                    {this.state.treesData.map(tree => <option value={tree.id}>{tree.ime}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-2">
                                <label>Broj zasađenih stabala</label>
                                <input type="number" className="form-control" name='brZas' onChange={this.handleInput} />
                            </div>
                            <div className="form-group col-md-2">
                                <label>Površina zasađenih stabala</label>
                                <input type="number" className="form-control" name='povrsZas' onChange={this.handleInput}/>
                            </div>
                            <div className="form-group col-md-2">
                                <label>Broj posečenih stabala</label>
                                <input type="number" className="form-control" name='brPos' onChange={this.handleInput} />
                            </div>
                            <div className="form-group col-md-2">
                                <label>Površina posečenih stabala</label>
                                <input type="number" className="form-control" name='povrsPos' onChange={this.handleInput} />
                            </div>
                        </div>
                    </div>
                    : this.props.selected === '2' ?
                        <div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label>Tip</label>
                                    <select onChange={this.selectTip} className="form-control">
                                        <option selected>Izaberite...</option>
                                        <option value={1}>Listopadno</option>
                                        <option value={2} >Zimzeleno</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label>Naziv</label>
                                    <input type="text" className="form-control" name="treeName" onChange={this.handleInput}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label>Region</label>
                                    <select onChange={this.selectRegion} className="form-control">
                                        <option selected>Izaberite...</option>
                                        {this.state.regionsData.map(region => <option value={region.id}>{region.ime}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                            <div className="form-group col-md-2">
                                <label>Broj zasađenih stabala</label>
                                <input type="number" className="form-control" name='brZas' onChange={this.handleInput} />
                            </div>
                            <div className="form-group col-md-2">
                                <label>Površina zasađenih stabala</label>
                                <input type="number" className="form-control" name='povrsZas' onChange={this.handleInput}/>
                            </div>
                            <div className="form-group col-md-2">
                                <label>Broj posečenih stabala</label>
                                <input type="number" className="form-control" name='brPos' onChange={this.handleInput} />
                            </div>
                            <div className="form-group col-md-2">
                                <label>Površina posečenih stabala</label>
                                <input type="number" className="form-control" name='povrsPos' onChange={this.handleInput} />
                            </div>
                            </div>
                        </div> :
                        <div>
                            <div className="form-group col-md-4">
                                    <label>Drvo</label>
                                    <select onChange={this.selectTree} className="form-control">
                                        <option selected>Izaberite...</option>
                                        {this.state.treesData.map(tree => <option value={tree.id}>{tree.ime}</option>)}
                                    </select>
                                </div>
                        </div>}

                    <button type="submit" onClick={this.props.selected === '1' ? this.addStats : this.props.selected === '2' ? this.addTree : this.deleteTree}
                    className="btn btn-primary btn-lg">Sačuvaj</button>
                </form>
            </div>
        );
    }
}

export default Forms;