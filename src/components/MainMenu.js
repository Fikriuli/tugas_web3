import React, { Component } from 'react';
import LeftMenu from './LeftMenu'

class Navbar extends Component {
    state = {
        current: 'mail',
        visible: false
    };
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <nav className="menuBar">
                <div className="logo">
                    <a href="">Fikz</a>
                </div>
                <div className="menuCon">
                    <div className="leftMenu">
                        <LeftMenu />
                    </div>
                    
                    
                </div>
            </nav>
        );
    }
}
export default Navbar;