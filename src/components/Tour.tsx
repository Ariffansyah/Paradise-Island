import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import DanauSentai from '../assets/danau sentani.jpg';
import BaseG from '../assets/base g.jpg';
import TamanNasionalWasur from '../assets/tamnas wasur.jpg';
import TamanNasionalLorentz from '../assets/tamnas lorentz.jpg';
import LembahBaliem from '../assets/lembah baliem.jpg';
import AirTerjunWafsarak from '../assets/air terjun wafsarak.jpg';
import RajaAmpat from '../assets/raja ampat.jpg';

function Tour() {
  return (
    <main className="bgcolor overflow-x-hidden w-100">
      <section className="bgcolor text-white">
        <div className="container-fluid">
          <div id="cardslide" className="carousel slide" data-bs-ride="carousel">
            <div className="container-fluid">
              <div>
                <h2 className="text-center mb-3"><strong>Tour Destination</strong></h2>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex justify-content-center align-item-center">
                    <div className="col-sm-4 px-2">
                      <div className="card shadow-lg p-3 mb-5 rounded bg-dark" style={{ height: "800px" }}>
                        <img className="card-img-top" src={DanauSentai} alt="..."></img>
                        <div className="card-body">
                          <h5 className="card-title text-white">Sentani Lake</h5>
                          <p className="card-text text-white">Sentani Lake, the largest in Papua, boasts fantastic panoramas and is a local pride! Located in Jayapura Regency, this lake spans 9,360 hectares and is fed by 14 major and minor rivers. Moreover, its annual fish production reaches up to 1,823 tons!</p>
                          <p className="card-text text-white">With its unique amoeba-like shape, 22 small islands adorn the lake, adding to its charm. It's no wonder Sentani Lake is a favorite tourist destination, bustling with visitors year-round.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center align-item-center">
                    <div className="col-sm-4 px-2">
                      <div className="card shadow-lg p-3 mb-5 rounded bg-dark" style={{ height: "800px" }}>
                        <img className="card-img-top" src={BaseG} alt="..."></img>
                        <div className="card-body">
                          <h5 className="card-title text-white">Base G</h5>
                          <p className="card-text text-white">In Papua, there's a beach as beautiful as a painting called Base-G Beach, located in the city of Jayapura. Its name originated from World War II when Allied forces used the beach as a military base. Another name for this beach is Tanjung Ria Beach.</p>
                          <p className="card-text text-white">When you visit this beach, you're guaranteed to feel relaxed by the gentle and soothing sound of the waves. The clean, sprawling sand will make you want to take endless photos! So, make sure you don't miss out on Base-G Beach when you visit Papua!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center align-item-center">
                    <div className="col-sm-4 px-2">
                      <div className="card shadow-lg p-3 mb-5 rounded bg-dark" style={{ height: "800px" }}>
                        <img className="card-img-top" src={TamanNasionalWasur} alt="..."></img>
                        <div className="card-body">
                          <h5 className="card-title text-white">Wasur National Park</h5>
                          <p className="card-text text-white">A trip to Papua wouldn't be complete without encountering unique wildlife like the cassowary. You can find the rich flora and fauna of Papua at Wasur National Park, located in Merauke Regency. With an area of 413,810 hectares, this park boasts the largest savanna forest in Indonesia, even in Asia. Most of the wildlife here are migratory species living across six different ecosystems. Visiting here feels like embarking on an adventure!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center align-item-center">
                    <div className="col-sm-4 px-2">
                      <div className="card shadow-lg p-3 mb-5 rounded bg-dark" style={{ height: "800px" }}>
                        <img className="card-img-top" src={TamanNasionalLorentz} alt="..."></img>
                        <div className="card-body">
                          <h5 className="card-title text-white">Lorentz National Park</h5>
                          <p className="card-text text-white">Equally spectacular, Lorentz National Park in Papua boasts the largest grandeur in Southeast Asia and is recognized as a UNESCO World Heritage Site. Spanning an impressive 2,505,600 hectares, this park stretches across ten regencies in Papua. It's no wonder that there are three different entry points to the park: Timika, Wamena, and Enarotali. So vast, right?</p>
                          <p className="card-text text-white">Moreover, Lorentz National Park is the largest conservation area with the most complete ecosystems in the Asia-Pacific region. Its unique fauna includes the long-tailed bird of paradise, the snowy quail, and the dingiso tree kangaroo. You definitely should get acquainted with these fascinating creatures when you visit!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center align-item-center">
                    <div className="col-sm-4 px-2">
                      <div className="card shadow-lg p-3 mb-5 rounded bg-dark" style={{ height: "800px" }}>
                        <img className="card-img-top" src={LembahBaliem} alt="..."></img>
                        <div className="card-body">
                          <h5 className="card-title text-white">Baliem Valley</h5>
                          <p className="card-text text-white">It's widely known that the Jayawijaya Mountains are the highest in Indonesia. If you visit these mountains, you must also stop by the Baliem Valley, just 27 km from Wamena, Papua. This expansive valley, covering 1,600 square kilometers, is home to three main tribes: the Dani, Yali, and Lani.</p>
                          <p className="card-text text-white">Beyond the refreshing air and stunning landscapes, the charm of this destination lies in the traditional houses and rich culture of the indigenous communities. A notable event here is the famous Baliem Valley Festival. Visiting this place is a must if you want to truly get to know Papua!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center align-item-center">
                    <div className="col-sm-4 px-2">
                      <div className="card shadow-lg p-3 mb-5 rounded bg-dark" style={{ height: "800px" }}>
                        <img className="card-img-top" src={AirTerjunWafsarak} alt="..."></img>
                        <div className="card-body">
                          <h5 className="card-title text-white">Wafsarak Waterfall</h5>
                          <p className="card-text text-white">Looking for a hidden paradise in Papua? Wafsarak Waterfall in North Biak, West Papua is your answer! This 10-meter-high waterfall offers a perfect escape in the heart of lush greenery. You can hear the roaring waterfall from the roadside due to its easy accessibility. The water in the plunge pool is crystal clear, making it ideal for swimming and playing with kids. If you're planning a family outing, visiting this tourist spot is a must! </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center align-item-center">
                    <div className="col-sm-4 px-2">
                      <div className="card shadow-lg p-3 mb-5 rounded bg-dark" style={{ height: "800px" }}>
                        <img className="card-img-top" src={RajaAmpat} alt="..."></img>
                        <div className="card-body">
                          <h5 className="card-title text-white">Raja Ampat</h5>
                          <p className="card-text text-white">Thanks to its turtle-like island formations dotting the ocean and its breathtaking underwater gardens, Raja Ampat has gained worldwide fame as a tourist destination!
                          </p>
                          <p className="card-text text-white">Located in Raja Ampat Regency, West Papua, the Raja Ampat Islands cover an area of 4.6 million hectares! This area is home to 75% of the world’s marine species. The term "underwater paradise" isn’t just a nickname—it's a reality. Raja Ampat truly deserves to be the top destination to visit in Papua. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="px-5 mt-3">Discover the enchanting beauty of Papua, where nature's wonders await at every turn. From the breathtaking vistas of Jayawijaya Mountains and the serene Baliem Valley, to the vibrant marine life of Raja Ampat and the majestic Wafsarak Waterfall, Papua offers an unparalleled journey into the heart of Indonesia's easternmost gem. Embark on an adventure that seamlessly blends pristine landscapes with rich cultural heritage, making it a destination like no other. </p>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#cardslide" data-bs-slide="prev">
              <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#cardslide" data-bs-slide="next">
              <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Tour;
