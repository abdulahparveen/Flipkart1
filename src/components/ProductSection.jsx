import React from "react";
import "./ProductSection.css";

export default function ProductSection({ title, products }) {
  return (
    <div className="container my-4">
      <h3 className="mb-3">{title}</h3>
      <div className="row">
        {products.map((p, index) => (
          <div className="col-12 col-md-4 mb-3" key={index}>
            <div className="card h-100 text-center product-card">
              <img src={p.img} alt={p.name} />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.offer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
