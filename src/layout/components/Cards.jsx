import React from "react"
import { Card } from "./Card"

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            films: []
        };
    }

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=8062dc96&s=matrix")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        films: result.Search
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, films} = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (<div>
                    {films.map(film => (
                        <Card key={film.imdbID} name={film.Title} poster={film.Poster} year={film.Year} />
                    ))}
                </div>
            )
        }
    }
}

export {Cards}

