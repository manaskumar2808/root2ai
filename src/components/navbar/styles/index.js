import styled from 'styled-components/macro';
import { constants } from '../../../utilities/constants';

export const Container = styled.div``;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
`;

export const BrandSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const BrandText = styled.p`
    cursor: pointer;
    font-family: 'Lobster';
    font-size: 25px;
    margin: 0;
`;

export const NavSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const NavItem = styled.div`
    margin: 0 15px;
`;

export const NavText = styled.p`
    cursor: pointer;
    font-size: 15px;
    margin: 0;

    :hover {
        color: ${() => `${constants.color.primary}`};
    }
`;