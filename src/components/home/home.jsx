/* eslint-disable no-undef */
import React, { Component } from "react";
import "./home.css";
import axios from 'axios';


class home extends Component {

    copyCodeToClipboard = () => {
        const el = document.getElementById("theUrl")
        el.select()
        document.execCommand("copy")
      }
      constructor(props) {
        super(props)
        this.state = {
          theUrl: ''
        }
      }
      changeHandler = (e) => {
         this.setState({[e.target.name]: e.target.value})
     }

     submitHandler = e => {
       e.preventDefault();
       console.log(this.state);
       axios.post('https://chhotume.herokuapp.com/create_shorten', this.state)
       .then((res) => {
         console.log(res);
         document.getElementById('theUrl').value = 'https://chhotume.herokuapp.com/'+res.data.urlId;
         document.getElementById('original').innerHTML = res.data.theUrl;
         document.getElementById('copy').disabled = false;
       })
       .catch((err) => {
         console.log(err);
       })
     }
  render() {
    const {theUrl} = this.state
    return (
      <div className="main-class">
        <div className="url_textbox ">
          <div className="input-group center-align">
            <input type="text" className="form-control" value={theUrl} name="theUrl" onChange = {this.changeHandler} placeholder="Type or paste your long url for shorten..." />
            <div className="input-group-append ">
              <span className="input-group-text create-btn btn" onClick={this.submitHandler}>Shorten</span>
            </div>
          </div>
        </div>
        <div id="shorten-urlArea">
        <div className="shorten-urlArea card" id="shorten-urlArea">
        <div  className="copy-btn">
            <button type="button" title="copy to clipboard" id="copy"  onClick={() => this.copyCodeToClipboard()} className="btn btn-clipboard float-right" title data-original-title="Copy to clipboard">Copy</button>
        </div>
            <div className="card-body">
                <input className="theUrl" id="theUrl"
                   value="" readOnly />
            </div>

            <div className="card-body">
                <span>Original Url</span>
                <span className="original" id="original"></span>
            </div>
        </div>
      
        </div>
        </div>
    );
  }
}

export default home;
