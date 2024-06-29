import React from 'react';

function Sign() {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We&apos;ll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="w-100 items-center gap-6 text-lg border border-primary-300 px-2 py-2 font-medium mb-2 rounded-pill btn btn-info text-light">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Sign;
