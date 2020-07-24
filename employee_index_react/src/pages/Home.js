import React, { Component } from "react";

import Hero from "../components/Hero/index"
import Container from "../components/container/index";
import List from "../components/List/index";

class Home extends Component {
    state ={
        search: "",
    }

    render(){
        return (
            <div>
            <Hero />
            <Container>
                <List />
            </Container>
            </div>
        )
    }
    
}

export default Home;