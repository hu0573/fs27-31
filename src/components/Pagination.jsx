const Pagination = ({ paginate, postsPerpage, currentPage, totalPosts }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerpage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <i key={number} className="page-item">
            <a
              href="#"
              className={`page-link ${
                currentPage === number ? "active-page" : ""
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </i>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
