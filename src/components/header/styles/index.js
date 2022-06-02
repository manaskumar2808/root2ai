import styled from 'styled-components/macro';
import { constants } from '../../../utilities/constants';

export const Container = styled.div``;

export const Wrapper = styled.div`
    width: 100%;
    height: 60vh;
    position: relative;
`;

export const Background = styled.div`
    height: 100%;
    width: 100%;
    background: ${({ image }) => `url(${image})`};
    background-color: ${() => `${constants.color.black}`};
`;

export const QuoteSection = styled.div`
    position: absolute;
    top: 13%;
    left: 7%;
    width: 50%;
`;

export const Quote = styled.p`
    font-size: 80px;
    color: ${() => `${constants.color.light}`};
    font-weight: bolder;
    margin: 0;
`;

export const ButtonSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const QuoteButton = styled.button`
    cursor: pointer;
    background-color: ${() => `${constants.color.primary}`};
    color: ${() => `${constants.color.light}`};
    border: none;
    border-radius: 10px;
    padding: 20px 40px;
    font-size: 20px;

    :hover {
        background-color: ${() => `${constants.color.primary}B3`};
    }
`;

export const JoinButton = styled.button`
    cursor: pointer;  
    background-color: rgba(0, 0, 0, 0);
    color: ${() => `${constants.color.light}`};
    border: ${() => `1px solid ${constants.color.light}`};
    border-radius: 10px;
    padding: 20px 40px;
    font-size: 20px;

    :hover {
        background-color: ${() => `${constants.color.light}`};
        color: ${() => `${constants.color.black}`};
    }
`;