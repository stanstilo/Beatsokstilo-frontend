import styled from 'styled-components'

export const StyledDrawer = styled.div` 
.DrawerToggle {
    width: 40px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 2px;
    box-sizing: border-box;
    cursor: pointer;
}

.menu-button {
    width: 90%;
    height:3px;
    background-color:#000;
    margin-top:14%;
}

@media (min-width: 870px) {
    .DrawerToggle {
        display: none;
    }
}
`


