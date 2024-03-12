// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon

import { Component } from "react";

export default class Hero extends Component{
    render(){
        return (
            <>
                <div className="name container">
                    <strong>Name: Sopan Bhere</strong>
                </div>
                <div className="email container">
                    Email: sopan@gmail.com
                </div>
                <div className="phone container">
                    Phone: 8898998989 
                </div>
                <div className="address container">
                    Address: abc chowk, xyz street 
                </div>
            </>
        )
    }
}