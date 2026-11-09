import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const BlogsPagination = ({setPageNumber , pageNumber , totalPage}) => {
  return (
    <div>
      <Pagination>
        <PaginationContent>

            <PaginationPrevious
            onClick={() =>
                setPageNumber(prev => Math.max(prev - 1, 1))
            }
            disabled={pageNumber === 1}
            />

            {Array.from({ length: totalPage }).map((_, index) => {
            const page = index + 1;
            return (
                <PaginationItem key={page}>
                <PaginationLink
                className='cursor-pointer'
                    isActive={pageNumber === page}
                    onClick={() => setPageNumber(page)}
                >
                    {page}
                </PaginationLink>
                </PaginationItem>
            );
            })}

            <PaginationNext
            onClick={() =>
                setPageNumber(prev => Math.min(prev + 1, totalPage))
            }
            disabled={pageNumber === totalPage}
            />

        </PaginationContent>
      </Pagination>

    </div>
  )
}

export default BlogsPagination