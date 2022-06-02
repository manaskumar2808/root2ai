import styled from 'styled-components/macro';
import { constants } from '../../../utilities/constants';

export const Container = styled.div``;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    padding: 40px;
    background-color: ${() => `${constants.color.background}`};
`;

export const Section = styled.div`
    flex: 1;
    /* margin: 0 10px; */
`;

export const HeadingSection = styled.div`

`;

export const Heading = styled.p`
    font-size: 16px;
    margin: 0;
    color: ${() => `${constants.color.black}`};
`;

export const Text = styled.p`
    font-size: 13px;
    margin: 0;
    color: ${() => `${constants.color.secondary}`};
`;

export const Tweet = styled.span`
    font-size: 13px;
    margin: 0;
    color: ${() => `${constants.color.secondary}`};

    :first-child {
        color: ${() => `${constants.color.primary}`};
    }
`;

export const Row = styled.div`
    padding: 10px;
    border-bottom: ${() => `0.1px solid ${constants.color.secondary}`};
`;

export const Timestamp = styled.p`
    font-size: 12px;
    margin: 0;
    color: ${() => `${constants.color.secondary}`};
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Action = styled.div`
    cursor: pointer;
    margin: 0 10px;

    :hover {
        color: ${() => `${constants.color.primary}`};
    }
`;

export const EmailInput = styled.input`
    border: ${() => `0.2px solid ${constants.color.secondary}`};
    background-color: ${() => `${constants.color.light}`};
    padding: 10px;
    border-radius: 5px;
    width: 100%;

    :focus {
        outline: none;
    }
`;

export const SubmitButton = styled.button`
    border: none;
    background-color: ${() => `${constants.color.primary}`};
    color: ${() => `${constants.color.light}`};
    border-radius: 5px;
    padding: 10px;
`;