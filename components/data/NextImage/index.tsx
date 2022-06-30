import Image from "next/image";
import { baseImage } from "src/services/api";

import * as S from "./styles";

interface NextImageProps {
  isBaseUrl?: boolean;
  src: string | undefined;
  layout: "fill" | "fixed" | "intrinsic" | "responsive" | "raw" | undefined;
}

export function NextImage({ src, layout, isBaseUrl }: NextImageProps) {
  return (
    <S.Image>
      <Image
        src={src ? (isBaseUrl ? baseImage + src : src) : "/images/default.jpg"}
        layout={layout}
      />
    </S.Image>
  );
}
