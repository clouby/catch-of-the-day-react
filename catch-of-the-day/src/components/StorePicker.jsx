import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "./../helpers";

class StorePicker extends React.Component {
  inputStoreName = React.createRef();

  static propTypes = {
    history: PropTypes.object
  };
  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from that input
    const { value: storeName } = this.inputStoreName.current;
    // 3. Change the page to /store/woo-uu-wii
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.inputStoreName}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store 🡒</button>
      </form>
    );
  }
}

export default StorePicker;
