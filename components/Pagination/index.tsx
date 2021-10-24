import ButtonPrimary from "@components/Button/Primary";
import ButtonSecondary from "@components/Button/Secondary";

//STYLES
import styles from "./pagination.module.css";

//TYPES
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: any;
}

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const handleUpdateCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  const handleBackPage = (currentPage: number) => {
    setCurrentPage(currentPage - 1);
  };

  const handleAdvancedPage = (currentPage: number) => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className={styles.container}>
      <ButtonSecondary
        disabled={currentPage === 1}
        onClick={() => handleBackPage(currentPage)}
      >
        {"<"}
      </ButtonSecondary>

      <div>
        {Array.from(Array(totalPages).keys()).map((value) => {
          const page = value + 1;
          if (page === currentPage) {
            return <ButtonPrimary onClick={() => {}}>{page}</ButtonPrimary>;
          } else {
            return (
              <ButtonSecondary onClick={() => handleUpdateCurrentPage(page)}>
                {page}
              </ButtonSecondary>
            );
          }
        })}
      </div>

      <ButtonSecondary
        disabled={totalPages === currentPage}
        onClick={() => handleAdvancedPage(currentPage)}
      >
        {">"}
      </ButtonSecondary>
    </div>
  );
};

export default Pagination;
