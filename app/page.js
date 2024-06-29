import AddListning from "./_components/AddListning";
import Header from "./_components/Header";
import Navbar from "./_components/Navbar";
import Speciality from "./_components/Speciality";
import SubForm from "./_components/SubForm";
import Testimonials from "./_components/Testimonials";
import Footer from "./_components/Footer";
import "@/app/_styles/globals.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Header />
        <div className="row">
  <div className="col-12 order-2 order-md-1">
 <Speciality/>
  </div>
  <div className="col-12 order-1 order-md-2">
  <AddListning />
  </div>
</div>

        <Testimonials />
        <SubForm />
      </div>
      <Footer />
    </>
  );
}
