// import React, { Component } from "react";
// import { connect } from "react-redux";
// import Button from "../../components/UI/Button/Button";
// import * as actions from "../../store/actions/index";
// import Spinner from '../../components/UI/Spinner/Spinner';
// import { Redirect } from 'react-router-dom';
// import { StyledForm } from "../../components/styles/Signin.style";
// import Input from '../../components/UI/Input/Input';
 
// class Auth extends Component {
//   state = {
//     controls: {
//       email: {
//         elementType: "input",
//         elementConfig: {
//           type: "email",
//           placeholder: "Mail address",
//           name:"email",
//           id:"email"
//         },
//         value: "",
//         validation: {
//           required: true,
//         },
//         valid: false,
//         touched: false,
//       },
//       password: {
//         elementType: "password",
//         elementConfig: {
//           type: "password",
//           placeholder: "Password",
//           name:"password",
//           id:"password"
//         },
//         value: "",
//         validation: {
//           required: true,
//           minLength: 6,
//         },
//         valid: false,
//         touched: false,
//       },
//     },
//     isSignup: true,
//   };

//   componentDidMount(){
//    if(this.props.authRedirectPath !== '/'){
//      this.props.onSetAuthRedirectPath()
//    }
//   }

//   checkValidity(value, rules) {
//     let isValid = true;
//     if (!rules) {
//       return true;
//     }

//     if (rules.required) {
//       isValid = value.trim() !== "" && isValid;
//     }

//     if (rules.minLength) {
//       isValid = value.length >= rules.minLength && isValid;
//     }

//     if (rules.maxLength) {
//       isValid = value.length <= rules.maxLength && isValid;
//     }

//     if (rules.isEmail) {
//       const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
//       isValid = pattern.test(value) && isValid;
//     }

//     if (rules.isNumeric) {
//       const pattern = /^\d+$/;
//       isValid = pattern.test(value) && isValid;
//     }

//     return isValid;
//   }

//    inputChangedHandler = (event, controlName) => {
//        const updatedControls = {
//        ...this.state.controls,
//        [controlName]: {
//         ...this.state.controls[controlName],
//          value: event.target.value,
//          valid: this.checkValidity(
//           event.target.value,
//           this.state.controls[controlName].validation
//         ),
//         touched: true,
//       },
//     };
//     this.setState({ controls: updatedControls });
//   };

//   submitHandler = (event) => {
//     event.preventDefault();
//     this.props.onAuth(
//       this.state.controls.email.value,
//       this.state.controls.password.value
//     );
//   };

//   switchAuthModeHandler = () => {
//     this.setState((prevState) => {
//       return { isSignup: !prevState.isSignup };
//     });
//   };

//   render() {
//     const formElementsArray = [];
//     for (let key in this.state.controls) {
//       formElementsArray.push({
//         id: key,
//         config: this.state.controls[key],
//       });
//     }
    
//     if(this.props.loading){
//        <Spinner />
//     }

//     let errorMessage = null
//     if(this.props.error){
//       errorMessage = (
//       <p>{this.props.error.message}</p>
//       )
//     }

//     let authRedirect = null
//     if (this.props.isAuthenticated){
//        authRedirect = <Redirect to={this.props.authRedirectPath}/>
//     } 
//     let form = formElementsArray.map(formElement => (
//       <Input 
//          key={formElement.id}
//          elementType={formElement.config.elementType}
//          elementConfig={formElement.config.elementConfig}
//          value={formElement.config.value}
//          invalid={!formElement.config.valid}
//          shouldValidate={formElement.config.validation}
//          touched={formElement.config.touched}
//          changed={(event) => this.inputChangedHandler(event, formElement.id)}     
//       />))

//     return (
//       <div>
//         {authRedirect}
//         {errorMessage}              
//         <StyledForm onSubmit={this.submitHandler}>
//           <div className="InputElement">
//             <h2>Login</h2>
//               {form}
   
//             <p className="forgot-password">forgot password?</p>
//             <p>
//               <Button type="submit">
//                 login
//               </Button>
//             </p>
//               <p className="no-account">
//                 Don't have an account? <span>Sign Up</span>
//               </p>
//           </div>
//         </StyledForm>
//       </div>
//     );
//   }
// }


// const mapStateToProps = state => {
//   return{
//     // loading: state.authLogin.loading,
//     // error: state.authLogin.error,
//     // isAuthenticated: state.authLogin.token !== null,
//     // authRedirectPath: state.authLogin.authRedirectPath
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAuth: (email, password, isSignup) => dispatch(actions.authLogin(email, password, isSignup)),
//     onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Auth);  
               