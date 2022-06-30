import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Container, SearchComponent } from "components/data/components"

import * as S from "./styles";

interface Header {
  headerAbsolute?: boolean;
}

export function HeaderComponent({ headerAbsolute }: Header) {


  return (
    <S.Header>
 
    </S.Header>
  );
}
