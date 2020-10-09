import React, { Component } from "react";
import { InputDate } from "elemets/Form";

export default class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4 offset-md-4">
              {/* <InputNumber
                max={30}
                suffix=" night"
                onChange={this.handleChange}
                name="value"
                value={this.state.value}
              /> */}
              <InputDate
                max={30}
                onChange={this.handleChange}
                name="value"
                value={this.state.value}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
