import styled from 'styled-components/macro';
import { constants } from '../../../utilities/constants';

export const Container = styled.div`

`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${() => `${constants.color.black}`};
    padding: 10px;
`;

export const Section = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Text = styled.p`
    font-size: 14px;
    color: ${() => `${constants.color.light}`};
    margin: 0;
`;