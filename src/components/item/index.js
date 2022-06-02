import React from 'react';
import { 
    Container,
    Display,
    DisplaySection,
    InfoSection,
    Photo,
    Subtext,
    Title,
    Wrapper,
} from './styles';

const Item = ({ item: { id, image, title, subtext }, width }) => {
    return (
        <Container width={width}>
            <Wrapper>
                <DisplaySection>
                    <Display width={width}>
                        { image.trim().length > 0 && <Photo src={image} url={title} />}
                    </Display>
                </DisplaySection>
                <InfoSection>
                    <Title>
                        {title}
                    </Title>
                    {subtext.trim().length > 0 && <Subtext>
                        {subtext}
                    </Subtext>}
                </InfoSection>
            </Wrapper>
        </Container>
    );
}

export default Item;