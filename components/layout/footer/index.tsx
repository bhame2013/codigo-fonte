import Link from "next/link";

import { Newsletter } from "./newsletter";

import { Container } from "components/data/components"

import * as S from "./styles";

interface FooterProps {
  newsletter?: boolean
}

export function FooterComponent({ newsletter }: FooterProps) {
  return (
    <S.Footer>
    
    </S.Footer>
  );
}
