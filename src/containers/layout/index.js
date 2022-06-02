import React from 'react';
import Header from '../../components/header';
import List from '../../components/list';
import Navbar from '../../components/navbar';
import {
    Container, FooterSection, HeaderSection, MainSection, NavSection,
} from './styles';
import { tours } from '../../utilities/tours';
import { services } from '../../utilities/sevices';
import Footer from '../../components/footer';
import Top from '../../components/top';

const Layout = () => {
    return (
        <Container>
            <HeaderSection>
                <Top />
                <NavSection>
                    <Navbar />  
                </NavSection>
                <Header />
            </HeaderSection>

            <MainSection>
                <List list={tours['domestic']} width={240} />
                <List list={tours['international']} width={240} />
                <List list={services} width={240} />
            </MainSection>

            <FooterSection>
                <Footer />
            </FooterSection>
        </Container>
    );
}

export default Layout;