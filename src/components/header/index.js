import React from 'react';
import {
    Background, Container, Quote, QuoteButton, QuoteSection, Wrapper, ButtonSection, JoinButton
} from './styles';

const Header = () => {

    const quote = 'Time to Explore the World!';

    const images = [
        {
            id: 'img0',
            url: 'https://papers.co/wallpaper/papers.co-np32-mountain-wood-night-dark-river-nature-blue-25-wallpaper.jpg',
        },
    ];

    return (
        <Container>
            <Wrapper>
                <Background image={images[0].url} />
                <QuoteSection>
                    <Quote>
                        {quote}
                    </Quote>
                    <div style={{ height: 20 }} />
                    <ButtonSection>
                        <QuoteButton>
                            Explore Now
                        </QuoteButton>
                        <div style={{ width: 20 }} />
                        <JoinButton>
                            Join Today
                        </JoinButton>
                    </ButtonSection>
                </QuoteSection>
            </Wrapper>
        </Container>
    );
}

export default Header;