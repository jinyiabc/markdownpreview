import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

const test = marked('# Marked in browser\n\nRendered by **marked**.');
console.log(test);
//<div dangerouslySetInnerHTML={{ __html: this.state. }} />


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      afterMarked:''
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event){
    this.setState({afterMarked:marked(event.target.value)});
    //this.setState({afterMarked:marked(target)});
    console.log(event.target.value);
    //console.log(this.state.afterMarked);

  }
  render() {
    return (
      <div className="App">
        <textarea rows='10' cols='50' onChange={this.handleEvent}></textarea>
        <div dangerouslySetInnerHTML={{ __html: this.state.afterMarked }} />

      </div>
    );
  }
}

export default App;
