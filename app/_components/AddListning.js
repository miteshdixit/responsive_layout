import { IoAdd } from "react-icons/io5";

function AddListning() {
  return (
    <div className="mt-5 d-flex justify-content-center">
      <div className="card-body text-center">
        <h5 className="card-title">
          <IoAdd className="icon-style" /> <span className="text-primary">Add Listings</span>
        </h5>
        <p className="card-text px-4">
          Add listings of your choice.
        </p>
      </div>
    </div>
  );
}

export default AddListning;
