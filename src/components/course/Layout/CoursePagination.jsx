import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const CoursePagination = ({ pageNumber, totalPages, setPageNumber }) => {
  if (!totalPages || totalPages <= 1) return null;

  const handleChangePage = (page) => {
    if (page === pageNumber) return;
    setPageNumber(page);
  };

  return (
    <Pagination className="py-10" dir="rtl">
      <PaginationContent>

        {/* قبلی */}
        <PaginationItem>
          <PaginationPrevious
            onClick={(e) => {
              e.preventDefault();
              handleChangePage(pageNumber - 1);
            }}
            className={pageNumber === 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {/* شماره صفحات */}
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={page === pageNumber}
                onClick={(e) => {
                  e.preventDefault();
                  handleChangePage(page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* بعدی */}
        <PaginationItem>
          <PaginationNext
            onClick={(e) => {
              e.preventDefault();
              handleChangePage(pageNumber + 1);
            }}
            className={
              pageNumber === totalPages
                ? "pointer-events-none opacity-50"
                : ""
            }
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  );
};

export default CoursePagination;