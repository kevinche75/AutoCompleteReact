import React from 'react'
import axios from "axios";


export class Autocomplete extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list: this.getList()
        }
    }

    getList(){
        axios.get('/someURL')
            .then(result => {
                return result
            })
    }

    render() {
        return(
            <div class={"AutoComplete"}>
                <input list={"options"}/>
                <datalist id={"options"}>
                    {this.state.list.map((key, item)=>
                        <option key={key} value={item}/>
                    )}
                </datalist>
            </div>
            )
    }
}
