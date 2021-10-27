import styled from "@emotion/styled";


export const H1 = styled.h1`
font-family: Karla;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
/* identical to box height */

letter-spacing: -0.3px;

color: #2AB3B1;
`;
export const H2 = styled.h2`
font-family: Karla;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 21px;
/* identical to box height */

letter-spacing: -0.225px;

color: #FFFFFF;

`;
export const H3 = styled.h3`
font-family: Karla;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 21px;
/* identical to box height */

letter-spacing: -0.225px;

color: #C0DF33;
`;
export const H4 = styled.h4`
font-family: Karla;
margin: 0px;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 37px;
letter-spacing: -0.4px;

color: #FFFFFF;
`;

export const H5 = styled.h4`
`;

export const Span = styled.span`
font-family: Karla;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
/* identical to box height, or 162% */

letter-spacing: -0.2px;

color: #FFFFFF;`;

export const P = styled.p<{ color: string }>`
font-family: Karla;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
/* or 162% */

letter-spacing: -0.2px;

color: ${({ color }) => color};
`;

