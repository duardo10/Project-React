import styled, { css } from "styled-components";

export const Title = styled.h1.attrs({ as: 'div' })`
    ${({ theme, colorDark }) => css`
        color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    `}

`;