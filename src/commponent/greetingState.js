import React from 'react';

class GreetingState extends React.Component {
    constructor() {
        super();
        this.state = {
            keyapaaja: 0
        };
    }

    showAlert =()=>{
        alert('test');
    }
    minElement =()=>{
        if(this.state.keyapaaja === 0){
            alert('nilai tidak bisa dikurang karena kosong');
        }else{
            this.setState(prevState => ({
                keyapaaja: prevState.keyapaaja - 1
            }))
        }
    }
    plusElement = () => {
        this.setState(prevState => ({
            keyapaaja: prevState.keyapaaja + 1
        }))
    }

    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <table>
                                <tr>
                                    <td><button class="btn btn-primary" onClick={this.minElement}><i class="fa fa-minus" aria-hidden="true"></i></button></td>
                                    <td><h1 style={{paddingLeft:"1em",paddingRight:"1em"}}>{this.state.keyapaaja}</h1></td>
                                    <td><button class="btn btn-primary" onClick={this.plusElement}><i class="fa fa-plus" aria-hidden="true"></i></button></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GreetingState