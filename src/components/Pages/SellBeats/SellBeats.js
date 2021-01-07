import React, { Component } from "react";
import axios from "axios";
import { Progress } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SellBeats.css";
import SellBeatsControl from "./SellBeatsControl";

class SellBeat extends Component {
  state = {
    selectedFile: null,
    name: "",
    email: "",
    title: "",
    mobileNumber: "",
    description: "",
    price:"",
    bpm:"",
    loaded: 0,
  };
  // select files for upload
  fileSelectedHandler = (event) => {
    var files = event.target.files;
    // if (this.maxSelectFile(event) && this.checkMimeType(event) &&  this.checkFileSize(event)) {}
    // if return true allow to setState
    console.log(files);
    this.setState({
      selectedFile: files,
      loaded: 0,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/sell/";
    const data = {
      name: this.state.name,
      email: this.state.email,
      title: this.state.title,
      mobileNumber: this.state.mobileNumber,
      description: this.state.description,
    };
    try {
      await this.uploadFileHandler(url, this.state.selectedFile);
      this.setState({
        name: "",
        email: "",
        title: "",
        mobileNumber: "",
        description: "",
        selectedFile: "",
      });
      toast.success("upload success");
    } catch (error) {
      console.log(error);
      toast.error("upload failed");
    }
  };

  uploadFileHandler = async (url, selectedFile) => {
    const formData = new FormData(document.getElementById("myForm"));
    // formData.append('imageFile', selectedFile);
    // for (var x = 0; x < selectedFile.length; x++) {}
    formData.append("imageFile", selectedFile);
    formData.append("mp3File", selectedFile);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          this.setState({
            loaded: Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            ),
          });
        },
      });
      const responseData = await response;
      console.log(responseData);
    } catch (error) {
      this.setState({
        errorMessage: error.message,
      });
    }
  };

  render() {
    const { name, email, title, description, mobileNumber, bpm, price } = this.state;
    return (
      <>
        <form method="POST" onSubmit={this.submitHandler} id="myForm">
          <h5 className="heading-text">Sell your beats today!!!</h5>
          <div className="SellBeat-Container">
            <div className="col-md-11">
              <ToastContainer />
              <Progress max="100" color="success" value={this.state.loaded}>
                {Math.round(this.state.loaded, 2)}%
              </Progress>

              <div className="file-row-1 files">
                <div className="column-label-art">
                  <label>Upload your Cover art </label>
                </div>

                <div className="column-label-mp3">
                  <label>Upload your beat mp3 format </label>
                </div>
              </div>

              <div className="file-row-2 files">
                <div className="column-input-art">
                  <input
                    type="file"
                    onChange={this.fileSelectedHandler}
                    name="imageFile"
                    required
                  />
                </div>
                <div className="column-input-mp3">
                  <input
                    type="file"
                    multiple
                    onChange={this.fileSelectedHandler}
                    name="mp3File"
                    required
                  />
                </div>
              </div>
              <SellBeatsControl
                name={name}
                title={title}
                mobile={mobileNumber}
                description={description}
                email={email}
                bpm={bpm}
                price={price}
                handleChange={this.handleChange}
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default SellBeat;
