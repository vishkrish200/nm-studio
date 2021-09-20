import styled from "styled-components";
const StyledP = styled.p`
  margin: 0;
  padding: 0;
  font-size: ${({ defaultFontSize }) => defaultFontSize};
  @media (max-width: 768px) {
    font-size: ${({ tabletFontSize }) => tabletFontSize};
  }
`;

const StyledH1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${({ defaultFontSize }) => defaultFontSize};
  @media (max-width: 768px) {
    font-size: ${({ tabletFontSize }) => tabletFontSize};
  }
  ::first-letter {
    color: ${({ firstLetter }) => firstLetter};
  }
  font-weight: ${({ fontWeight }) => fontWeight};
`;
const StyledH2 = styled.h2`
  margin: 0;
  padding: 0;
  font-size: ${({ defaultFontSize }) => defaultFontSize};
  @media (max-width: 768px) {
    font-size: ${({ tabletFontSize }) => tabletFontSize};
  }
  font-style: ${({ italic }) => italic};
  font-weight: ${({ bold }) => bold};
`;
const StyledH3 = styled.h3`
  margin: 0;
  padding: 0;
  font-size: ${({ defaultFontSize }) => defaultFontSize};
  @media (max-width: 768px) {
    font-size: ${({ tabletFontSize }) => tabletFontSize};
  }
`;

export function Paragraph({ defaultFontSize, tabletFontSize, children }) {
  return (
    <StyledP defaultFontSize={defaultFontSize} tabletFontSize={tabletFontSize}>
      {children}
    </StyledP>
  );
}

export function H1({
  defaultFontSize,
  tabletFontSize,
  firstLetter,
  fontWeight,
  children,
}) {
  return (
    <StyledH1
      defaultFontSize={defaultFontSize}
      tabletFontSize={tabletFontSize}
      firstLetter={firstLetter}
      fontWeight={fontWeight}
    >
      {children}
    </StyledH1>
  );
}
export function H2({
  defaultFontSize,
  tabletFontSize,
  italic,
  bold,
  children,
}) {
  return (
    <StyledH2
      defaultFontSize={defaultFontSize}
      tabletFontSize={tabletFontSize}
      italic={italic}
      bold={bold}
    >
      {children}
    </StyledH2>
  );
}
export function H3({ defaultFontSize, tabletFontSize, children }) {
  return (
    <StyledH3 defaultFontSize={defaultFontSize} tabletFontSize={tabletFontSize}>
      {children}
    </StyledH3>
  );
}
