class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      isVisible: false,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  }

  render() {
    return (
      <>
        <h1>Visibility Toggler</h1>
        <button onClick={this.handleToggleVisibility}>
          {
            this.state.isVisible ? 'Hide details' : 'Show Details'
          }
        </button>
        {
          this.state.isVisible && <p>Hey. These are some details you can now see!</p>
        }
      </>
    );
  }
}

const appRoot = document.querySelector('#app');
ReactDOM.render(<VisibilityToggle />, appRoot);
