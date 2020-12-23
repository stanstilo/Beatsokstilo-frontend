import styled from 'styled-components'

export const StyledNavWrapper = styled.nav`
 .nav-item{
     color:#141a3e !important
     cursor:pointer
     font-size:1rem;
     text-decoration:none !important 
     margin-top:3.4%;     
 } 
 .nav-link{
  text-decoration:none
  color:inherit;
  box-sizing:border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding:0px;
 }
 .custom-nav-item:hover{
  border-bottom:2px solid #8f4d29;
 }
 .nav-link--active {
  border-bottom: 2px solid #8f4d29;
  transition: border-bottom .5s ease-in-out;
  padding:0px
  &:hover{
    border:none;
  }
}
  .instrumental-dropdown{
    z-index:50;
    position:absolute;
    background:#fff;
    width:170px;
    height:70px;
    padding:5px 8px;
    border-radius:6px;
    transition:all ease-in 0.4s;
}
.instrumental-dropdown h4{
  font-size:1rem;
  &:hover{
    color: #bd493c;
  }
}
.profile-dropdown{
  z-index:50;
  position:absolute;
  background:#fff;
  width:160px;
  height:70px;
  padding:5px 8px;
  border-radius:6px;
  transition:all ease-in 0.4s;
}
.profile-dropdown h4{
font-size:1rem;
&:hover{
  color: #bd493c;
}
}
.search_icon{
  padding-top:26px;                                   
  padding-left:23px; 
  cursor:pointer;
}
.search_input{  
  padding:5px;
  outline:none
  transition:all ease-in 6s;
} 
.search-input-div{
 display:flex;
 z-index:999;
 position:absolute;
 left:56%;
}
.search-beat-button{
  height:38px;
  background:#8f4d29;
  border:none;
  border-top-right-radius:15px
  color:#fff;
  font-size:.8rem
  width:60px;
  outline:none;
  transition:all ease-in 6s;
}
.nav-sign{
  cursor:pointer;
  margin-top:2%;
  margin-left:15%
}
.nav-profile{
  cursor:pointer;
  margin-top:1.5%
  margin-right:10%
}
.nav-item-login{
  color:#1b1308 !important
  font-size:1rem;     
} 
`
