import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class FooWithClickOutside extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      outside: false,
      ref: React.createRef(null)
    };

    this.handleBoxClick = this.handleBoxClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutside);
  }

  handleBoxClick() {
    this.setState(state => ({ ...state, outside: false }));
  }

  handleClickOutside(e) {
    if (this.state.ref.current && !this.state.ref.current.contains(e.target)) {
      this.setState(state => ({ ...state, outside: true }));
    }
  }

  render() {
    return (
      <>
        <Link className="back" to="/">
          ←
        </Link>
        <div className="container">
          <div
            className="box big"
            onClick={this.handleBoxClick}
            ref={this.state.ref}
          >
            <p>Box</p>
            <span>{this.state.outside ? 'Outside' : 'Inside'}</span>
          </div>
        </div>
      </>
    );
  }
}

export default FooWithClickOutside;
