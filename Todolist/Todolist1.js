import React, { Component } from 'react'
import Todolist2 from './Todolist2';
import '../Todo/Todo.css'

 class Todolist1 extends Component {
    //  defining the state
     constructor(props) {
         super(props)
     
         this.state = {
              name1:" ",
              done:false,
              theme:false,
              todos: [],

         }
         console.log(this.state);
     }
//    adding the input onchange
     changetodo =  (e) => {
           this.setState({
             name1: e.target.value,
         })
         console.log(this.state.name1);
     }
// setting the local storage
    Tolocalstroage = (todo) => {
        localStorage.setItem('TODO',JSON.stringify(todo));
    }
    // getting the todos from the local storage
    gettodofromlocal = () => {
        let todoitem = JSON.parse(localStorage.getItem('TODO'))
        // return todoitem || [];
        this.setState({
            todos:[todoitem]
        })
    //    if(todoitem)
    //   this.setState({
    //       todos:[todoitem]
    //   })
    //   return todoitem
    }
    
    render() {
        return (
            <div>
            <div className = "main">
                
            <div className = "main_2_one">
               <div className = "main_todo">
               <h1>TODO</h1>
               </div>
                <div className = "main_todo1">
        
                <img src = "Images/icon-moon.svg"></img>
                    </div> 
            </div>
            <div className = "main_2_two">
                <form onSubmit = {async (e) =>{
                    e.preventDefault();
                   await this.setState({
                        todos:[...this.state.todos,this.state.name1]
                    })
                    this.Tolocalstroage(this.state.todos)
                    
                   
                   
                }}>
                <input type = "search"
                 placeholder = "Enter anything u needed that is not needed for me "
                 value = {this.state.name1} 
                 onChange = {this.changetodo}
                 ></input>
                 
               </form>
            </div>
           
            
    
    </div>
    
    </div>
        )
    }
}

export default Todolist1
