import React, { Component } from "react";
import emailjs from "emailjs-com";
import Dropdown from "react-dropdown";
import { toast } from "react-toastify";
import "react-dropdown/style.css";
import "react-toastify/dist/ReactToastify.css";

const options = [
  "General Enquiry",
  "Overall Experience",
  "Job Opportunity",
  "Franchise",
  "Others",
];
const defaultOption = options[0];

toast.configure();

class rollneyform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from_name: "",
      from_email: "",
      from_feedback: "",
      from_number: "",
      selected: "",
    };
    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect(option) {
    this.setState({ selected: option });
  }

  handleChange(event) {
    let name, obj;
    name = event.target.name;
    this.setState(((obj = {}), (obj["" + name] = event.target.value), obj));
  }

  sendEmail = (e) => {
    e.preventDefault();

    const { value } = this.state.selected;
    const { from_name, from_email, from_feedback, from_number } = this.state;

    var templateParams = {
      from_name: from_name,
      from_email: from_email,
      from_message: value + " request",
      from_feedback: from_feedback,
      from_number: from_number,
    };

    emailjs
      .send(
        "rollney",
        "template_TjgZmXDL",
        templateParams,
        "user_4ZJBPOZVFtol1wCDE1o2c"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          toast("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
          toast("FAILED, something went wrong!");
        }
      );
  };

  render() {
    return (
      <section className="section-form">
        <p className="title">
          CONTACT US <br />
          We are happy to hear your feedback
        </p>
        <div className="two-item">
          <div>
            <input
              className="input"
              placeholder="YOUR NAME (REQUIRED)"
              type="text"
              id="name"
              name="from_name"
              value={this.state.from_name}
              onChange={this.handleChange.bind(this)}
              required
              minLength="3"
              maxLength="30"
              size="10"
            />
            <span className="underline"></span>
          </div>

          <div>
            <input
              className="input"
              placeholder="YOUR CONTACT (REQUIRED)"
              type="text"
              id="number"
              name="from_number"
              value={this.state.from_number}
              onChange={this.handleChange.bind(this)}
              required
              minLength="4"
              maxLength="30"
              size="10"
            />
            <span className="underline"></span>
          </div>
        </div>

        <div className="mb-4">
          <input
            className="input"
            placeholder="YOUR EMAIL (REQUIRED)"
            type="text"
            id="email"
            name="from_email"
            value={this.state.from_email}
            onChange={this.handleChange.bind(this)}
            required
            minLength="4"
            maxLength="30"
            size="10"
          />
          <span className="underline"></span>
        </div>

        <Dropdown
          className="dropdown"
          options={options}
          onChange={this._onSelect}
          value={defaultOption}
          placeholder="Select an option"
        />

        <textarea
          name="from_feedback"
          className="feedback"
          label="Your Message"
          onChange={this.handleChange.bind(this)}
          placeholder="Give some feedback"
        ></textarea>

        <button className="rollney-button" onClick={this.sendEmail}>
          CONTACT US
        </button>

        {/* <ul>
          <li>Share Your Excitement With Us</li>
          <li>Food Quality</li>
          <li>Overall Service Quality</li>
          <li>Cleanliness</li>
          <li>Order Accuracy</li>
          <li>Speed of Service</li>
          <li>Value</li>
          <li>Overall Experience</li>
          <li>Other comments, questions or suggestions?</li>
        </ul> */}
      </section>
    );
  }
}

export default rollneyform;
