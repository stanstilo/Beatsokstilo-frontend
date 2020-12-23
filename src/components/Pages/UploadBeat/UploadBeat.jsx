import React, { Component } from "react";
import axios from "axios";
import { Progress } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UploadBeatControl from "./UploadBeatControl";
import "./UploadBeat.css";

class UploadBeat extends Component {
  state = {
    selectedFile: null,
    name: "",
    email: "",
    title: "",
    mobileNumber: "",
    description: "",
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
    const url = "http://localhost:5000/upload/";
    const {selectedFile} = this.state
    try {
        await this.uploadFileHandler(url, selectedFile);
        this.setState({
        name: "",
        email: "",
        title: "",
        mobileNumber: "",
        description: "",
        selectedFile: ""
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
    const { name, email, title, description, mobileNumber } = this.state;
    return (
      <>
        <form method="POST" onSubmit={this.submitHandler} id="myForm">
           <h5 className="heading-text">Upload Free beats</h5>
          <div className="UploadBeat-Container">
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
                    className="input-art"
                    type="file"
                    onChange={this.fileSelectedHandler}
                    name="imageFile"
                    required
                  />
                </div>
                <div className="column-input-mp3">
                  <input
                    className="input-mp3"
                    type="file"
                    multiple
                    onChange={this.fileSelectedHandler}
                    name="mp3File"
                    required
                  />
                </div>
              </div>
              <UploadBeatControl
                name={name}
                title={title}
                mobile={mobileNumber}
                description={description}
                email={email}
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

export default UploadBeat;
