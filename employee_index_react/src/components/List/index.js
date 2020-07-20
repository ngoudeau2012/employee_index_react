import React, { Component } from "react";
import axios from "axios";
import ListResults from "../ListResults";
// import Container from "../components/Container";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";


class EmployeeList extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };

//   // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    this.populateEmployees();
  }

populateEmployees = () => {
    axios.get("https://randomuser.me/api/?results=200&nat=u")
    .then((res)=> {
      const employees = res.data.results;
      
      this.setState({results: employees})
      console.log(this.state.results)
    })
};
//   handleInputChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     API.getDogsOfBreed(this.state.search)
//       .then(res => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({ results: res.data.message, error: "" });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };
  render() {
    
    return (
      <div>
       <ListResults 
       results= {this.state.results}
       />
      </div>
    );
  }
}

export default EmployeeList;
