import React, { useContext, useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container, Nav, Logo, BtnHamburguer, Menu } from './styles';
import { MdMenu, MdClose } from "react-icons/md";

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <Container>
            <Nav className="header">

                <Logo className="">
                    <a href="#">
                        Logo
                     </a>
                </Logo>


                <Menu className={click ? "nav-options active" : "nav-options"}>

                    <li className="">
                        <Switch
                            onChange={toggleTheme}
                            checked={title === 'dark'}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            height={10}
                            width={40}

                            handleDiameter={20}
                            offColor={shade(0.15, colors.primary)}
                            onColor={shade(0.15, colors.secundary)}
                        />
                    </li>

                    <li onClick={closeMobileMenu}>
                        <a href="#">Sobre</a>
                    </li>
                    <li onClick={closeMobileMenu}>
                        <a href="#">Projeto</a>
                    </li>
                    <li onClick={closeMobileMenu}>
                        <a href="#">Contato</a>
                    </li>



                </Menu>


                <BtnHamburguer className="mobile-menu" onClick={handleClick}>
                    {click ? (<MdClose />) : (<MdMenu />)}
                </BtnHamburguer>
            </Nav>
        </Container>
    )
}

export default Header;