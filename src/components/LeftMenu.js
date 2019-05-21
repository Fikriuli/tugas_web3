import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {
    constructor(){
        super();
        this.state = {
            menu : [
                {url: '/home',name:'Home'},
                {url: '/profile',name:'Profile'},
                {url: '/portofolio',name:'Portofolio'},
                {url: '/contact',name:'Contact'},
            ]
        }
    }

    render() {
        return (
            <Menu mode="horizontal">
                {this.state.menu.map((data) => {
                    return(
                        <Menu.Item key={data.name}>
                            <Link to={data.url}>{data.name}</Link>
                        </Menu.Item>
                    )
                })}

            </Menu>
        );
    }
}

export default LeftMenu;