import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Papua1 from '../assets/1.png';
import Papua2 from '../assets/2.png';
import Papua3 from '../assets/3.png';
import Tour from '../assets/Tour.png';
import Culi from '../assets/Culi.png';

function Home() {
  return (
    <main className="bgcolor overflow-x-hidden w-100">
      <section className="text-white">
        <div className="container-fluid">
          <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active c-item">
                <img src={Papua1} className="d-block w-100 previewimage" alt="..."></img>
                <div className="carousel-caption top-0 marginhome d-none d-md-block">
                  <h1 className="fs-1 text-uppercase fw-bold">Welcome to Papua</h1>
                  <p className="fs-4">Dive into the Heart of Paradise.</p>
                </div>
              </div>
              <div className="carousel-item c-item">
                <img src={Papua2} className="d-block w-100 previewimage" alt="..."></img>
                <div className="carousel-caption top-0 marginhome d-none d-md-block">
                  <p className="fs-3"><strong>Explore the Unique Culture of Papua: Where Tradition Meets Adventure.</strong></p>
                </div>
              </div>
              <div className="carousel-item c-item">
                <img src={Papua3} className="d-block w-100 previewimage" alt="..."></img>
                <div className="carousel-caption top-0 marginhome d-none d-md-block">
                  <p className="fs-3"><strong>Experience the Untouched Wonders of Papua.</strong></p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center container-fluid">
            <h3 className="mt-5">About Papua</h3>
            <p className="px-5">Papua is an island where nature's majesty is as boundless as the traditions held by its people. It's a realm of pristine landscapes—from lush rainforests and towering mountains to vibrant coral reefs teeming with marine life. The cultural tapestry of Papua is rich with indigenous tribes, each with unique customs, dances, and art forms, passed down through generations. This island isn’t just a place; it’s an experience of discovery, where adventure meets the serene rhythms of age-old traditions. Discover the untouched wonders of Papua—where every corner tells a tale of nature and heritage intertwined.</p>
            <h3 className="mt-2">Location</h3>
            <p className="px-5">Papua, the easternmost province of Indonesia, is a land of immense natural beauty and cultural diversity. It lies on the western half of the island of New Guinea, sharing its eastern border with the independent country of Papua New Guinea. The province is characterized by a wide range of landscapes, from lush tropical rainforests and towering mountain ranges to vibrant coastal regions and coral reefs. Its capital, Jayapura, is a bustling city that serves as the gateway to this wild and wondrous region. Papua's location makes it a hotspot for biodiversity, housing many unique species of flora and fauna that can't be found anywhere else on Earth. This remote province is a treasure trove of adventures waiting to be explored. </p>
            <h3 className="mt-2">History</h3>
            <p className="px-5 pb-5">Papua, the easternmost province of Indonesia, has a rich history marked by ancient human migration, European exploration, and colonial rule. Indigenous people have inhabited the region for tens of thousands of years. The island was first encountered by Europeans in the 16th century, with significant influence from Portuguese, Spanish, Dutch, and German powers. After World War II, Papua was divided into two territories, with the western part eventually becoming a province of Indonesia in 1969. This history is a tapestry of cultural resilience and natural beauty, shaped by both external influences and internal strength.</p>
          </div>
        </div>
        <div className="d-flex mobile justify-content-center">
          <div className="col-sm-3 mx-2">
            <div className="card shadow-lg p-3 mb-5 rounded bg-dark">
              <img className="card-img-top" src={Tour} alt="..."></img>
              <div className="card-body">
                <h5 className="card-title text-white">Tour Destination</h5>
                <p className="card-text text-white">Explore the Paradise Island.</p>
                <a href="/Tour" className="btn btn-light">Explore</a>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mx-2">
            <div className="card shadow-lg p-3 mb-5 rounded bg-dark">
              <img className="card-img-top" src={Culi} alt="..."></img>
              <div className="card-body">
                <h5 className="card-title text-white">Culinary</h5>
                <p className="card-text text-white">Taste the Culinary.</p>
                <a href="/Culinary" className="btn btn-light">Explore</a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mobile justify-content-center">
          <div className="d-flex flex-column text-center px-3">
            <h6><strong>Biodata</strong></h6>
            <p>Mohammad Ariffansyah</p>
            <p>24051204099</p>
            <p>Teknik Informatika 2024</p>
          </div>
          <div className="d-flex flex-column text-center px-3">
            <h6><strong>Social</strong></h6>
            <p>@arppthef</p>
          </div>
          <div className="d-flex flex-column text-center px-3">
            <h6><strong>Contact</strong></h6>
            <p>me@arpthef.my.id</p>
            <p>24051204099@mhs.unesa.ac.id</p>
          </div>
        </div>
      </section>
    </main >
  );
}

export default Home;
