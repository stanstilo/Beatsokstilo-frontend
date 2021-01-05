import styled from 'styled-components'

export const StyledForm = styled.form`
.login-form-container {
   border: .2em solid #efe3d6;
   border-radius: .2em;
   max-width: 400px;
   margin: 3em auto;
   padding: 1em;
}
h2 {
 font-size: 1.5rem;
 color:#000;
text-align:center;
}

label {
 display: block;
 margin-bottom: .5em;
 margin-top: 1.5em;
 text-transform:capitalize
}

input[type="email"],
input[type="password"] {
 width: 100%;
 padding: .5em;
 transition: .5s ease-out;   
  &:focus {
   outline: 1px solid #bd493c
 } 
}

button {
 display: block;
 border-radius: 4px;
 border:none;
 padding: 1em;
 width: 100%;
 font-weight: bold;
 color: white;
 background: #8e6048;
 opacity: ${props => props.isLoading ? ".7" : "1"};
 text-transform: uppercase;
 font-size: .8em;
 margin-top:9%
 transition: .15s ease-out;
 
  &:hover {
   background: #8a6048;
   opacity:0.9;
 } 
}

p:last-of-type {
 margin-bottom: 0;
}

.forgot-password{
 font-size:.8rem;
 cursor:pointer;
}
 .no-account{
   margin-left:14%
   font-size:.9rem;
 }
 span{
   color:#8a6048;
   cursor:pointer;
 }
`
