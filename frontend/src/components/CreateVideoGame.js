import React from "react";

const API_URL = process.env.REACT_APP_API_URL;

class CreateVideoGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      type: "",
      genre: "",
      released: "",
      players: "",
      consoles: [""],
      owned: false,
    };
  }
  addConsole = () => {
    const newConsoles = this.state.consoles.map((x) => x);
    newConsoles.push("");
    this.setState({ consoles: newConsoles });
  };
  removeConsole = (index) => {
    const newConsoles = this.state.consoles.map(x => x);
    newConsoles.splice(index, 1);
    this.setState({ consoles: newConsoles });
  };
  handleConsoleChange = (value, index) => {
    const newConsoles = this.state.consoles.map((x) => x);
    newConsoles[index] = value;
    this.setState({ consoles: newConsoles });
  };
  handleChange = ({ target }) => {
    let value = target.type === "checkbox" ? target.checked : target.value;
    value = target.type === "number" ? parseInt(value) : value;
    this.setState({ [target.name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_URL}/video-games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then(this.props.refresh)
      .then(() =>
        this.setState({
          title: "",
          type: "",
          genre: "",
          released: "",
          players: "",
          consoles: [""],
          owned: false,
        })
      );
  };
  render() {
    const displayConsoles = this.state.consoles.map((console, index) => {
      return (
        <div key={index}>
          <select
            value={this.state.consoles[index]}
            onChange={({ target }) =>
              this.handleConsoleChange(target.value, index)
            }
          >
            <option value="">Choose a Console</option>
            <option value="ps1">PlayStation 1</option>
            <option value="ps2">PlayStation 2</option>
            <option value="ps3">PlayStation 3</option>
            <option value="ps4">PlayStation 4</option>
            <option value="xbox">Xbox</option>
            <option value="xbox 360">Xbox 360</option>
            <option value="xbox 1">Xbox One</option>
            <option value="pc">PC</option>
            <option value="wii">Wii</option>
            <option value="wiiu">Wii U</option>
            <option value="Switch">Switch</option>
          </select>
          <input
            className="del-btn"
            type="button"
            value="X"
            onClick={() => this.removeConsole(index)}
          />
        </div>
      );
    });
    return (
      <form id="create" onSubmit={this.handleSubmit}>
        {/* title */}
        <input
          name="title"
          type="text"
          placeholder="Game Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        {/* Game type */}
        <input
          name="type"
          type="text"
          placeholder="Game Type"
          value={this.state.type}
          onChange={this.handleChange}
        />
        {/* genre */}
        <input
          name="genre"
          type="text"
          placeholder="Game Genre"
          value={this.state.genre}
          onChange={this.handleChange}
        />

        {/* Release Date */}
        <div>
          <label htmlFor="release">First Released</label>
          <input
            name="release"
            type="date"
            placeholder="Release Date"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="players">Number of Players</label>
          <input
            name="players"
            type="number"
            value={this.state.players}
            onChange={this.handleChange}
          />
        </div>

        {displayConsoles}
        <input type="button" value="Add Console" onClick={this.addConsole} />
        <div>
          <label htmlFor="owned">Owned</label>
          <input
            name="owned"
            type="checkbox"
            checked={this.state.owned}
            onChange={this.handleChange}
          />
        </div>
        <button> Add Game</button>
      </form>
    );
  }
}

export default CreateVideoGame;
