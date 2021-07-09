import React,{Component} from 'react'

class AddTodo extends Component {
    state = {
        container:''
    }
    handleChange = (e) =>{
        this.setState({
            container: e.target.value
        })
    } 
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addTodo(this.state);
        this.setState({
            container: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type  = 'text' onChange = {this.handleChange} value = {this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo
