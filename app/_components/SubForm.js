
import Image from "next/image";
import { IoIosAddCircle } from "react-icons/io";
function SubForm() {
  return (
    
     <div className="card text-center mt-5 bg-success p-2 text-dark bg-opacity-50 ">

  <div className="card-body align-item-center ">
    <h5 className="card-title text-lg">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary text-light"><IoIosAddCircle className="btn-global"/>Add</a>
  </div>
  <div className="container">
            <div className="row">
              <div className="col-sm-6 mb-2">
                <Image
                  src="/image-2.png"
                  width={500}
                  height={300}
                  alt="Image"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-sm-6">
                <Image
                  src="/image-1.png"
                  width={400}
                  height={200}
                  alt="Image"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
</div>
   
  )
}

export default SubForm