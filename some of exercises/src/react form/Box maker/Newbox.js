import React, { Component } from 'react';
import uuid from "uuid/v4";
class Newbox extends Component {
    constructor(props) {
        super(props);
        this.state = { width: "", hight: "", color: "" }
        this.handelchange = this.handelchange.bind(this)
        this.handelsubmit = this.handelsubmit.bind(this)
    }
    handelchange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handelsubmit(evt) {
        evt.preventDefault();
        const newbox = { ...this.state, id: uuid() }
        if (this.state.hight && this.state.width && this.state.color) {
            this.props.creatNewBox(newbox)
            this.setState({ width: "", hight: "", color: "" })
        }
    }
    render() {

        return (
            <div>

                <form onSubmit={this.handelsubmit}>
                    <label>Hight</label>
                    <input
                        type="text"
                        name="hight"
                        value={this.state.hight}
                        onChange={this.handelchange}
                        id="height"
                    />
                    <label>Width</label>
                    <input
                        type="text"
                        name="width"
                        value={this.state.width}
                        onChange={this.handelchange}
                        id="width"
                    />
                    <label>Color</label>
                    <input
                        type="text"
                        name="color"
                        value={this.state.color}
                        onChange={this.handelchange}
                        id="color"
                    />
                    <button>Add New Box</button>
                </form>
            </div>
        )
    }
}
export default Newbox;