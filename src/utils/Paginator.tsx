import {FC} from "react";

function createPages(pages: any[], pagesCount: number, currentPage: number) {
    if (pagesCount > 10) {
        if (currentPage > 5) {
            for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                pages.push(i)
                if (i === pagesCount) {
                    break
                }
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                pages.push(i)
                if (i === pagesCount) {
                    break
                }
            }
        }
    } else {
        for (let i = 0; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
}

interface IPaginator {
    totalCount: number
    pageSize: number
    currentPage: number
    pageChanged: (page: number) => void
}

export const Paginator: FC<IPaginator> = ({totalCount, pageSize, currentPage, pageChanged}) => {

    const pagesCount = Math.ceil(totalCount / pageSize)

    let pages: any[] = []

    createPages(pages, pagesCount, currentPage)

    return (
        <>
            {pages.map((page) =>
                <span key={page} style={{border: page === currentPage ? "2px solid green" : "1px solid gray"}}
                      onClick={() => {
                          pageChanged(page)
                      }}>
                    {page}
                </span>
            )}
        </>
    )
}