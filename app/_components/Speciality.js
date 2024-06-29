import React from 'react';

function Speciality() {
  return (
    <div className="container mt-5 mb-5 ">
      <div className="row row-cols-1 row-cols-md-2 g-4 ho">
        <div className="col">
          <div className="card border border-success">
            <div className="card-body">
              <h5 className="card-title text-success">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-info text-light">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body border border-danger">
              <h5 className="card-title text-success">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-info text-light">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body border border-warning">
              <h5 className="card-title text-success">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-info text-light">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body border border-primary">
              <h5 className="card-title text-success">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-info text-light">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speciality;
