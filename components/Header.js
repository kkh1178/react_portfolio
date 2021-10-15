import React from 'react';
import { Menu } from 'semantic-ui-react';
import Link from 'next/link';

const Header = () => {
    return (
        <Menu style={{ marginTop: '10px' }}>
            <Link href="/">
                <a>
                    <Menu.Item name="Home" />
                </a>
            </Link>
            <Link href="/nasaImage">
                <a>
                    <Menu.Item name="Daily NASA Pic" />
                </a>
            </Link>
            <Link href="/marsrover">
                <a>
                    <Menu.Item name="Mars Rover Pics" />
                </a>
            </Link>
        </Menu>
    )
}

export default Header;