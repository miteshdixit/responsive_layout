import React from 'react'

function Join() {
  return (
    <div>
       <form>
      <div className="mb-3">
       
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='example@.com'/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='password' />
      </div>

      <div className="d-flex justify-content-center">
  <button type="submit" className="w-100 items-center gap-6 text-lg border border-primary-300 px-2 py-2 font-medium mb-2 rounded-pill btn btn-info text-light">
    Agree and Continue
  </button>
</div>

    </form>
    </div>
  )
}

export default Join