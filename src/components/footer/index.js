import React, { useState } from 'react';
import { specifications } from '../../utilities/specifications';
import { 
    Action,
    Actions,
    Container,
    EmailInput,
    Heading,
    HeadingSection,
    Row,
    Section,
    SubmitButton,
    Text,
    Timestamp,
    Wrapper,
    Tweet,
} from './styles';
import { BsApple, BsFacebook, BsGoogle, BsInstagram, BsLinkedin, BsPinterest } from 'react-icons/bs';
import { constants } from '../../utilities/constants';

const Footer = () => {
    const [email, setEmail] = useState('');

    return (
        <Container>
            <Wrapper>
                <Section>
                    <HeadingSection>
                        <Heading>
                            About Us
                        </Heading>
                    </HeadingSection>
                    <Text>
                        {specifications.aboutUs}
                    </Text>
                </Section>
                <div style={{ width: 30 }} />
                <Section>
                    <HeadingSection>
                        <Heading>
                            Travel Specialists
                        </Heading>
                    </HeadingSection>
                    <Row>
                        <Text>First Class Flights</Text>
                    </Row>
                    <Row>
                        <Text>Accessible Travel</Text>
                    </Row>
                    <Row>
                        <Text>Amazing Cruises</Text>
                    </Row>
                    <div style={{ height: 10 }} />
                    <Actions>
                        <Action>
                            <BsFacebook size={20} color={constants.color.secondary} />
                        </Action>
                        <Action>
                            <BsGoogle size={20} color={constants.color.secondary} />
                        </Action>
                        <Action>
                            <BsInstagram size={20} color={constants.color.secondary} />
                        </Action>
                        <Action>
                            <BsPinterest size={20} color={constants.color.secondary} />
                        </Action>
                        <Action>
                            <BsApple size={20} color={constants.color.secondary} />
                        </Action>
                        <Action>
                            <BsLinkedin size={20} color={constants.color.secondary} />
                        </Action>
                    </Actions>
                </Section>
                <div style={{ width: 30 }} />
                <Section>
                    <HeadingSection>
                        <Heading>
                            Our Twitter
                        </Heading>
                    </HeadingSection>
                    <Row>
                        <Text>
                            <Tweet>@travel</Tweet> Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                        </Text>
                        <Timestamp>
                            5 minutes ago
                        </Timestamp>
                    </Row>
                    <Row>
                        <Text>
                            <Tweet>@leo</Tweet> Nam liber tempor cum soluta nobis option congue nihil imperdiet doming id quod mazim.
                        </Text>
                        <Timestamp>
                            2 days ago
                        </Timestamp>
                    </Row>
                </Section>
                <div style={{ width: 30 }} />
                <Section>
                    <HeadingSection>
                        <Heading>
                            Newsletter
                        </Heading>
                    </HeadingSection>
                    <Text>
                        Inspiration, ideas, news and your feedback.
                    </Text>
                    <div style={{ height: 10 }} />
                    <EmailInput
                        type='text'
                        placeholder='Email Address'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <div style={{ height: 10 }} />
                    <SubmitButton>
                        Submit
                    </SubmitButton>
                    <div style={{ height: 10 }} />
                    <Text>
                        support@templates-support.com
                    </Text>
                </Section>
            </Wrapper>
        </Container>
    );
}

export default Footer;