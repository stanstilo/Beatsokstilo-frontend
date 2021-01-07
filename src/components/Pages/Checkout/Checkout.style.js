import styled from 'styled-components'

export const StyledForm = styled.form`

.fill-form {
   border: .2em solid #fed8ca;
   border-radius: .2em;
   max-width: 400px;
   margin: 3em auto;
   padding: 1em;
}
h2 {
 font-size: 1.5rem;
 color:#000;
//  margin-left:20%;
}

label {
 display: block;
 margin-bottom: .5em;
 margin-top: 1.5em
}

input[type="email"],
input[type="text"] {
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
 background: #bd493c;
 opacity: ${props => props.isLoading ? ".7" : "1"};
 text-transform: uppercase;
 font-size: .8em;
 margin-top:9%
 transition: .15s ease-out;
 
  &:hover {
   background: #bd493c;
   opacity:0.9;
 } 
}

p:last-of-type {
 margin-bottom: 0;
}
 span{
   color:#bd493c;
   cursor:pointer;
 }
`
