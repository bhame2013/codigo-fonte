export interface IPagination {
    totalItems: number;
    page: number;
    pageSize: number;
    totalPages: number;
    startPage: number;
    endPage: number;
    startIndex: number;
    endIndex: number;
    pages: number[];
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}

export interface IPaginationProps {
    totalItems: number
    currentPage?: number
    pageSize?: number
    maxPages?: number
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}


export default function Paginate( {
    totalItems,
    currentPage = 1,
    pageSize = 40,
    maxPages = 3,
    hasNextPage,
    hasPreviousPage
    } : IPaginationProps
    
): IPagination {
    const totalPages = Math.ceil(totalItems / pageSize);
    let page = currentPage;

    if (page < 1) {
        page = 1;
    } else if (page > totalPages) {
        page = totalPages;
    }

    let startPage: number;
    let endPage: number;
    if (totalPages <= maxPages) {
        startPage = 1;
        endPage = totalPages;
    } else {
        const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (page <= maxPagesBeforeCurrentPage) {
            startPage = 1;
            endPage = maxPages;
        } else if (page + maxPagesAfterCurrentPage >= totalPages) {
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        } else {
            startPage = page - maxPagesBeforeCurrentPage;
            endPage = page + maxPagesAfterCurrentPage;
        }
    }

    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
        i => startPage + i,
    );

    return {
        totalItems,
        page,
        pageSize,
        totalPages,
        startPage,
        endPage,
        startIndex,
        endIndex,
        pages,
        hasNextPage,
        hasPreviousPage
    };
}
