import styled from "styled-components";

export const Image = styled.div`
  height: inherit;
  min-height: inherit;
  max-height: inherit;
  width: inherit;
  min-width: inherit;
  max-width: inherit;

  span {
    width: 100%;
    position: relative !important;
    height: inherit !important;
    min-height: inherit;
    max-height: inherit;
    width: inherit !important;
    min-width: inherit;
    max-width: inherit;

    img {
      position: relative !important;
      width: inherit !important;
      height: inherit !important;
      position: relative !important;
      min-height: inherit !important;
      max-height: inherit !important;
      min-width: inherit !important;
      max-width: inherit !important;
      object-fit: cover !important;
      object-position: center center !important;
    }
  }
`;
