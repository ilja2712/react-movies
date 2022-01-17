import React from 'react';
import { Cards } from './components/Cards';
import { Search } from "./components/Search";
import { Preloader } from "./components/Preloader"

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        };
    }

    searchMovies = (str, tpf) => {
        fetch(`http://www.omdbapi.com/?apikey=8062dc96&s=${str}&type=${tpf}`)
            .then(res => res.json())
            .then((result) => {this.setState({films: result.Search})})
    }

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=8062dc96&s=football")
            .then(res => res.json())
            .then((result) => {this.setState({films: result.Search})})
    }

    render() {
        const {films} = this.state;

        return <main className="content">
            <Search searchMovies={this.searchMovies}/>
            {
                films.length ? (
                <Cards films={this.state.films}/>
                ) : <Preloader />
            }
        </main>
    }
}

export {Main}