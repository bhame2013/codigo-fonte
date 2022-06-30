import * as S from "./styles";

interface PaginationProps {
  pages: number[];
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onSelect(page: number): void;
}

export function PaginationComponent({
  pages,
  currentPage,
  hasNextPage,
  hasPreviousPage,
  onSelect,
}: PaginationProps) {
  
  if (pages.length === 1) {
    return <div></div>;
  }

  return (
    <S.PaginationStyle>
      {hasPreviousPage && (
        <span
          style={{ display: currentPage == 1 ? "none" : "block" }}
          className="paragrafo2-regular filson"
          onClick={() => onSelect(currentPage - 1)}
        >
          Previous
        </span>
      )}

      {pages.map((pageItem) => {
        return (
          <button
            key={`${pageItem}-pagination}`}
            type="button"
            className={`${
              currentPage === pageItem
                ? "paragrafo2-regular filson active"
                : "paragrafo2-regular filson"
            }`}
            onClick={() => onSelect(pageItem)}
          >
            {pageItem}
          </button>
        );
      })}

      {hasNextPage && (
        <span
          style={{
            display: pages[pages.length - 1] == currentPage ? "none" : "block",
          }}
          className="paragrafo2-regular filson"
          onClick={() => onSelect(currentPage + 1)}
        >
          Next
        </span>
      )}
    </S.PaginationStyle>
  );
}
