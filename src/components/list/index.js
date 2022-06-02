import React from 'react';
import Item from '../item';
import { Container, Wrapper, Heading, HeadingSection } from './styles';

const List = ({ list: { heading, items = [] }, width }) => {
    return (
        <Container>
            <HeadingSection>
                <Heading>
                    {heading}
                </Heading>
            </HeadingSection>
            <Wrapper>
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                        width={width}
                    />)
                }
            </Wrapper>
        </Container>
    );
}

export default List;