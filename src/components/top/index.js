import React from 'react';
import { 
    Container, Section, Text, Wrapper,
} from './styles';
import { BsWhatsapp, BsPhone, BsMailbox, BsMailbox2 } from 'react-icons/bs';
import { constants } from '../../utilities/constants';

const Top = () => {
    return (
        <Container>
            <Wrapper>
                <Section>
                    <BsPhone size={20} color={constants.color.light} />
                    <div style={{ width: 10 }} />
                    <Text>
                        Phone : 84xxxxxxxx
                    </Text>
                </Section>
                <Section>
                    <BsWhatsapp size={20} color={constants.color.light} />
                    <div style={{ width: 10 }} />
                    <Text>
                        Whatsapp : 84xxxxxxxx
                    </Text>
                </Section>
                <Section>
                    <BsMailbox2 size={20} color={constants.color.light} />
                    <div style={{ width: 10 }} />
                    <Text>
                        Mail : travelxxxx@gmail.com
                    </Text>
                </Section>
                <Section>
                    <BsMailbox size={20} color={constants.color.light} />
                    <div style={{ width: 10 }} />
                    <Text>
                        Info-Mail : info.tourxxx@gmail.com
                    </Text>
                </Section>
                {/* <div style={{ flex: 1 }} /> */}
                <Section>
                    <Text>
                        Have any questions?
                    </Text>
                </Section>
            </Wrapper>
        </Container>
    );
}

export default Top;