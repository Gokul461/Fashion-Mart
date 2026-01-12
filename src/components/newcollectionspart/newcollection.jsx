import React, { useState } from "react";
import Item from "./itemnew"; // Import the Item component
import newCollection from "../../assets/images/new_collections"; // Import your data
import './newcollection.css'
const NewCollection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4; // You can adjust this number based on how many items per page you want

  const totalPages = Math.ceil(newCollection.length / productsPerPage);
  const displayedProducts = newCollection.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section id="collection-section">
    <div className="container mx-auto mt-10 px-6 pb-20">
      <h1 className="new-collection-title">
       <strong className="fw-bold">Future</strong> Collection
      </h1>
      <div className="row">
        {displayedProducts.map((product) => (
          <div className="col-12 col-sm-6 col-lg-3 mb-4" key={product.id}>
            <Item
              id={product.id}
              name={product.name}
              image={product.image}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          </div>
        ))}
      </div>


      <div className="pagination-controls">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
        >
          Previous
        </button>

        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="pagination-btn gray"
          >
            {currentPage - 1}
          </button>
        )}

        <button className="pagination-btn black">{currentPage}</button>

        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="pagination-btn gray"
          >
            {currentPage + 1}
          </button>
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`pagination-btn ${currentPage === totalPages ? "disabled" : ""}`}
        >
          Next
        </button>
      </div>
    </div>
    </section>
  );
};

export default NewCollection;
