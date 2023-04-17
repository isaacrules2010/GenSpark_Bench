import { PureComponent } from "react";

export default class Hero extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            x: this.props.position[0],
            y: this.props.position[1],
            str: 10,
            con: 10,
            dex: 10
        }
    }

    render(){
        return(
            <div style={{
                width: this.props.size, 
                height: this.props.size,
                left: this.state.x * this.props.size,
                top: this.state.y * this.props.size,
                backgroundColor: 'red',
                position: 'absolute'
            }}/>
        )
    }
}