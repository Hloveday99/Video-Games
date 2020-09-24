import React from 'react'

class CreateVideoGame extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            type: "",
            genre: "",
            released: "",
            consoles: [ "" ],
            owned: false
        }
    }
    render() {
        const displayConsoles = this.state.consoles.map((console, index) => {
        return (
            <select
            value={this.state.consoles[index]}>


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

            )
        })
        return (
            <form id="create">
                <input name="title" type="text" />
                <input name="type" type="text" />
                <input name="genre" type="text" />
                <input name="released" type="text" />
                <input name="consoles" type="text" />
                {displayConsoles}
                <input name="players" type="text" />
                <input name="owned" type="text" />
            </form>
        )
    }
}

export default CreateVideoGame