import { IoMdCheckmarkCircle } from "react-icons/io";
import Image from "next/image"; 

function Testimonials() {
  return (
    <div className="mw-4xl mx-auto shadow mt-5 mb-5 ">
    
      <div className="bg-white px-4 py-12 rounded-3 shadow-sm " style={{ position: "relative", zIndex: 1 }}>
        <div className="m-3 mt-5 d-flex align-items-center">
          <IoMdCheckmarkCircle className="icon-style" />
          <h2 className="ms-2">Testimonials</h2>
        </div>
        <h3 className="fs-5 fw-medium text-black mb-9 lh-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae et ultricies sapien mauris, urna.
          Arcu justo, tellus in tellus, sed sed venenatis velit. Nisl nam augue elit at viverra euismod vitae. Est
          praesent mattis velit morbi nec sit.
        </h3>
        <div className="container justify-content-end mb-5">
          <div className="row align-items-center justify-content-end">
            <div className="col-auto">
              <div className="container">
                <div className="row align-items-center g-3">
                  <div className="col-auto">
                    <Image
                      src="/avatar.jpg" // Correct path to your avatar image in the public folder
                      alt="Avatar"
                      width={60}
                      height={60}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="col-auto mb-3">
                    <h3 className="fs-6 mb-1">Albert Flores</h3>
                    <p className="fs-7 text-muted mb-0">Co-Founder, CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
