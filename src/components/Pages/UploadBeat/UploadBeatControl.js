import React from "react";

export default function UploadBeatControl(props) {
  return (
    <> 
        <div className="row_1">
        <div className="column-label-name">
        <label htmlFor="name">Producer's Name</label>
        </div>
        <div className="column-label-email">
        <label htmlFor="email">
          Email
        </label>
         </div>
        </div>

        <div className="row_2">
        <div className="column-input-name">
          <input
            type="text"
            name="name"
            id="name"
            value={props.name}
            placeholder="Enter your name"
            onChange={props.handleChange}
            required
          />
        </div>
        
        <div className="column-input-email">
          <input
            type="email"
            name="email"
            id="email"
            value={props.email}
            placeholder="Enter your email"
            onChange={props.handleChange}
            required
          />
        </div>
    </div>

        <div className="row_3">
        <div className="column-label-inst">
        <label htmlFor="title">Beat/Instrumental Title</label>
        </div>
        <div className="column-label-mobile">
        <label htmlFor="mobile" className="label-tel">
          Mobile Number
        </label>
        </div>
        </div>
        
        <div className="row_4">
        <div className="column-input-title">
        <div>
          <input
            type="text"
            name="title"
            id="title"
            value={props.title}
            onChange={props.handleChange}
            required
          />
        </div>
      </div>
      <div className="column-input-mobile">
        <div>
          <input
            type="tel"
            name="mobileNumber"
            id="mobile"
            placeholder="Enter your number"
            value={props.mobileNumber}
            onChange={props.handleChange}
            required
          />
        </div>
        </div>
        </div>

        <label htmlFor="Description">Description of beat</label>
        <div>
          <textarea
            id="description"
            name="description"
            value={props.description}
            onChange={props.handleChange}
            required
          ></textarea>
        </div>
      
    </>
  );
}
