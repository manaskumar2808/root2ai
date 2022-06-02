import styled from 'styled-components/macro';
import { constants } from '../../../utilities/constants';

export const Container = styled.div`
    margin: 0 20px;
    width: ${({ width }) => width + 'px'};
`;

export const Wrapper = styled.div`
    text-align: center;
`;

export const DisplaySection = styled.div``;

export const Display = styled.div`
    height: ${({ width }) => width + 'px'};
    width: ${({ width }) => width + 'px'};
    border-radius: 10px;
    overflow: hidden;
    background-color: ${() => `${constants.color.secondary}`};
`;

export const Photo = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const InfoSection = styled.div``;

export const Title = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
`;

export const Subtext = styled.p`
    font-size: 12px;
    margin: 0;
`;