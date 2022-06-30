import * as S from "./styles";

export function LoaderComponent() {
  return (
    <S.Loader>
      <div className="text">
        <p className="title-1-bold-cinzel">Loading</p>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <img src="images/collection/Goblin.gif" loading="lazy"/>
    </S.Loader>
  );
}
