import React, { Component } from "react";
import axios from "axios";
import ListResults from "../ListResults";
import Search from "../SearchBar";


class EmployeeList extends Component {
  state = {
    search: "",
    list: [],
    filteredList: [],
    error: "",
  };

  //   // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    this.populateEmployees();
  }

  populateEmployees = () => {
    axios.get("https://randomuser.me/api/?results=200&nat=u").then((res) => {
      const employees = res.data.results;
      console.log(employees);
      this.setState({ list: employees });
      this.filteredSearch();
    });
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
    this.filteredSearch();
  };

  filteredSearch = () => {
    
    let search = this.state.search.toLocaleLowerCase();

    let filteredArr = this.state.list.filter(employee => {
      let employeeName = `${employee.name.first.toLowerCase()} ${employee.name.last.toLowerCase()}`
      return employeeName.includes(search)
    });

    if (!this.state.search) {
      console.log("Success! No search");
      this.setState({ filteredList: this.state.list });
    } else {
      this.setState({filteredList: filteredArr})
      }
    };

  render() {
    return (
      <div>
        <Search
          searchState={this.state.search}
          onChange={this.handleInputChange}
        />
        <ListResults results={this.state.filteredList} />
      </div>
    );
  }
}

export default EmployeeList;
