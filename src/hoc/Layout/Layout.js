import React from 'react'
// import Footer from '../../components/Footer/Footer'
import Scroll from '../../components/Scroll/Scroll'
import Toolbar from  "../../components/Navigation/Toolbar/Toolbar"
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"

class Layout extends React.Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState( prevState  => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render () {
        const {showSideDrawer} = this.state
        return (
            <>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={showSideDrawer} closed={this.sideDrawerClosedHandler} />        
            
                <main>
                    {this.props.children}
                </main>
                 <Scroll />
                 {/* <Footer /> */}
            </>
        )
    }
}

export default Layout