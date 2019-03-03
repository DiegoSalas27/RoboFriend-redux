import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import './App.css';
import { setSearchField, requestRobots } from '../actions';


class App extends Component {

  componentDidMount() {
    this.props.OnRequestRobots()
  }

  // onSearchChange = (event) => { //this arrow function makes sures that "this" is refered to the app class and not the input from the 
  // //searchbox
  //   this.setState({ searchfield: event.target.value});
  // }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? 
      <h1>Loading...</h1> :
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => { //it sends the actions to the reducers
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    OnRequestRobots: () => dispatch(requestRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); //subscribe to any state changes in the redux store