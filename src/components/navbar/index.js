import React from 'react';
import { specifications } from '../../utilities/specifications';
import { Container, NavItem, NavText, Wrapper, BrandSection, BrandText, NavSection } from './styles';

const Navbar = () => {

    const navItems = [
        {
            id: 'nv0',
            title: 'Home',
        },
        {
            id: 'nv1',
            title: 'Tour Packages',
        },
        {
            id: 'nv2',
            title: 'Services',
        },
        {
            id: 'nv3',
            title: 'About Us',
        },
        {
            id: 'nv4',
            title: 'Videos',
        },
        {
            id: 'nv5',
            title: 'Gallery',
        },
        {
            id: 'nv6',
            title: 'Reviews',
        },
        {
            id: 'nv7',
            title: 'Contact Us',
        },
        {
            id: 'nv8',
            title: 'Log in | Sign up',
        }
    ];

    return (
        <Container>
            <Wrapper>
                <BrandSection>
                    <NavItem>
                        <BrandText>
                            {specifications.name}
                        </BrandText>
                    </NavItem>
                </BrandSection>
                <div style={{ flex: 1 }} />
                <NavSection>
                    {
                        navItems.map(navItem => <NavItem key={navItem.id}>
                            <NavText>{navItem.title}</NavText>
                        </NavItem>)
                    }
                </NavSection>
            </Wrapper>
        </Container>
    );
}

export default Navbar;