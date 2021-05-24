import React from "react";
import "./App.css";
import MonsterCardList from "../../components/monster-cardlist/monster-cardlist.component";
import SearchBox from "../../components/searchbox/searchbox.components";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            monsters: [],
            searchFiled: "",
        };
    }

    componentDidMount = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => this.setState({ monsters: users }));
    };

    onSearchChange = (e) => {
        this.setState({ searchFiled: e.target.value });
    };

    render() {
        const { monsters, searchFiled } = this.state;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchFiled.toLowerCase())
        );
        return (
            <div className="App">
                <h1 className="title">Monsters Rolodex</h1>
                <SearchBox
                    placeholder="Search monsters"
                    onSearchChange={this.onSearchChange}
                />
                <MonsterCardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
