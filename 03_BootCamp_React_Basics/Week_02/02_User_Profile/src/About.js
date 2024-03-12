// Create About component here to display the a small content here.
// In this component use paragraph tag (p) to display the content
import { Component } from "react";

export default class About extends Component{
    render(){
        return (
            <>
               <div className="about">
                    <p>
                        Hello, My name is Sopan. I am a fullstack developer and 
                        I have developed several projects with MERN stack.
                        I am also familiar with Python and Django.
                    </p>
               </div>
            </>
        )
    }
}