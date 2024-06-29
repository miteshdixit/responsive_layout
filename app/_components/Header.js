import Image from "next/image";
import SignInButton from "./Signin";
 

function Header() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 m-5">
          <h2>
            Explore your Hobby or <span className="text-success">Passion</span>
          </h2>
          <p>
            One of my passions is exploring the intersection of technology and
            creativity through coding and software development. I find immense
            joy in crafting solutions to real-world problems using programming
            languages like JavaScript and Python. This hobby allows me to
            continuously learn and innovate, whether it&apos;s building web
            applications, automating tasks with scripts, or diving into data
            analysis and machine learning projects. The process of
            problem-solving and creating
          </p>
          <div className="container mt-4">
            <div className="row">
              <div className="col-sm-6 mb-2">
                <Image
                  src="/image-2.png"
                  width={300}
                  height={300}
                  alt="Image"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-sm-6">
                <Image
                  src="/image-1.png"
                  width={300}
                  height={200}
                  alt="Image"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 m-4 p-2 mb-5">
          <SignInButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
