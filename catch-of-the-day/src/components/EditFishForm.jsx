import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static proTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func
  };

  onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    const fishUpdated = {
      ...this.props.fish,
      [name]: value
    };

    this.props.updateFish(this.props.index, fishUpdated);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.onChangeHandler}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.onChangeHandler}
          value={this.props.fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.onChangeHandler}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.onChangeHandler}
          value={this.props.fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.onChangeHandler}
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
