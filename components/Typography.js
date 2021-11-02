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
  @media (max-width: 480px) {
    font-size: ${({ mobileFontSize }) => mobileFontSize};
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
  @media (max-width: 480px) {
    font-size: ${({ mobileFontSize }) => mobileFontSize};
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
  @media (max-width: 480px) {
    font-size: ${({ mobileFontSize }) => mobileFontSize};
  }
`;

export function Paragraph({
  defaultFontSize,
  tabletFontSize,
  mobileFontSize,
  children,
}) {
  return (
    <StyledP
      defaultFontSize={defaultFontSize}
      tabletFontSize={tabletFontSize}
      mobileFontSize={mobileFontSize}
    >
      {children}
    </StyledP>
  );
}

export function H1({
  defaultFontSize,
  tabletFontSize,
  mobileFontSize,
  firstLetter,
  fontWeight,
  children,
}) {
  return (
    <StyledH1
      defaultFontSize={defaultFontSize}
      tabletFontSize={tabletFontSize}
      mobileFontSize={mobileFontSize}
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
  mobileFontSize,
  italic,
  bold,
  children,
}) {
  return (
    <StyledH2
      defaultFontSize={defaultFontSize}
      tabletFontSize={tabletFontSize}
      mobileFontSize={mobileFontSize}
      italic={italic}
      bold={bold}
    >
      {children}
    </StyledH2>
  );
}
export function H3({
  defaultFontSize,
  tabletFontSize,
  mobileFontSize,
  children,
}) {
  return (
    <StyledH3
      defaultFontSize={defaultFontSize}
      tabletFontSize={tabletFontSize}
      mobileFontSize={mobileFontSize}
    >
      {children}
    </StyledH3>
  );
}
