import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Papeda from '../assets/Papeda.jpg';
import KueSagu from '../assets/Kue Sagu.jpg';
import AunuSenebre from '../assets/AunuSenebre.jpg';
import AunuveHabre from '../assets/AunuveHabre.jpg';
import Sinole from '../assets/sinole.jpg';
import SunsetPapua from '../assets/Sunset Papua.jpg';

function Culinary() {
  return (
    <main className="bgcolor overflow-x-hidden w-100">
      <section className="bgcolor text-white">
        <div className="container-fluid">
          <div id="cardslide" className="carousel slide" data-bs-ride="carousel">
            <div className="container-fluid">
              <div>
                <h2 className="text-center mb-3"><strong>Culinary</strong></h2>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex justify-content-center align-item-center">
                    <div className="col-sm-4 px-2">
                      <div className="card shadow-lg p-3 mb-5 rounded bg-dark" style={{ height: "800px" }}>
                        <img className="card-img-top" src={Papeda} alt="..."></img>
                        <div className="card-body">
                          <h5 className="card-title text-white">Papeda</h5>
                          <p className="card-text text-white">Dive into the heart of Papuan culinary tradition with Papeda, a unique and nutritious sago-based dish! Often accompanied by savory yellow fish soup and aromatic herbs, Papeda offers a distinct, gelatinous texture that's a true delight for adventurous food lovers. Experience the flavors of Papua with every spoonful of this beloved local delicacy! </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center align-item-center">
                    <div className="col-sm-4 px-2">
                      <div className="card shadow-lg p-3 mb-5 rounded bg-dark" style={{ height: "800px" }}>
                        <img className="card-img-top" src={KueSagu} alt="..."></img>
                        <div className="card-body">
                          <h5 className="card-title text-white">Sago Cake</h5>
                          <p className="card-text text-white">Experience the delightful fusion of tradition and flavor with our sago cake, a cherished treat from the heart of Papua. Every bite is a journey through the rich culinary heritage of the region, offering a taste that's both unique and unforgettable. Perfectly crafted to bring you a piece of Papua in every slice!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center align-item-center">
                    <div className="col-sm-4 px-2">
                      <div className="card shadow-lg p-3 mb-5 rounded bg-dark" style={{ height: "800px" }}>
                        <img className="card-img-top" src={AunuSenebre} alt="..."></img>
                        <div className="card-body">
                          <h5 className="card-title text-white">Aunu Senebre</h5>
                          <p className="card-text text-white">Experience the rich flavors of Papua with Aunu Senebre, a traditional dish that combines the savory taste of smoked fish with the delicate texture of sago. This unique culinary delight is steamed to perfection, offering a tantalizing blend of local ingredients and centuries-old cooking techniques. A true taste of Papuan heritage in every bite! </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center align-item-center">
                    <div className="col-sm-4 px-2">
                      <div className="card shadow-lg p-3 mb-5 rounded bg-dark" style={{ height: "800px" }}>
                        <img className="card-img-top" src={AunuveHabre} alt="..."></img>
                        <div className="card-body">
                          <h5 className="card-title text-white">Aunuve Habre</h5>
                          <p className="card-text text-white">Indulge in the culinary heritage of Papua with Aunuve Habre, a traditional dish that beautifully combines smoked fish with grated cassava and coconut. Steamed to perfection, this dish offers a harmonious blend of smoky, savory, and slightly sweet flavors, delivering a truly unique dining experience. Dive into a plate of Aunuve Habre and savor the taste of authentic Papuan cuisine. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center align-item-center">
                    <div className="col-sm-4 px-2">
                      <div className="card shadow-lg p-3 mb-5 rounded bg-dark" style={{ height: "800px" }}>
                        <img className="card-img-top" src={Sinole} alt="..."></img>
                        <div className="card-body">
                          <h5 className="card-title text-white">Sinole</h5>
                          <p className="card-text text-white">Sinole, a traditional dish from Papua, is a unique culinary delight made from sago, a staple ingredient in Papuan cuisine. This dish features a distinct gelatinous texture and is often enjoyed with a variety of savory accompaniments, such as fish or coconut milk. Sinole's preparation involves meticulous processing of sago to achieve its characteristic consistency, reflecting the deep-rooted culinary traditions of the region. Whether served at family gatherings or cultural festivals, Sinole offers a taste of Papua's rich food heritage and a connection to its vibrant community.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center align-item-center">
                    <div className="col-sm-4 px-2">
                      <div className="card shadow-lg p-3 mb-5 rounded bg-dark" style={{ height: "800px" }}>
                        <img className="card-img-top" src={SunsetPapua} alt="..."></img>
                        <div className="card-body">
                          <h5 className="card-title text-white">Sunset Papua</h5>
                          <p className="card-text text-white">"Sunset Papua" is a captivating drink inspired by the breathtaking sunsets of Papua. This vibrant beverage features a blend of tropical fruits, creating a refreshing symphony of flavors that mirror the region's stunning twilight hues. Each sip offers a burst of natural sweetness and a hint of tanginess, making it the perfect drink to enjoy while soaking in the serene beauty of a Papuan evening. Truly a taste of paradise in a glass!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="px-5 mt-3">Papua's culinary landscape is a rich and diverse tapestry reflecting the island's vibrant culture and abundant natural resources. Traditional dishes like Papeda, with its unique gelatinous texture, and Aunu Senebre, combining smoked fish with sago, offer a taste of the island's deep-rooted heritage. The use of local ingredients such as sago, cassava, and fresh fish highlights the region's connection to its environment. Papua's cuisine not only delights the palate but also tells a story of its people's traditions, making each meal an immersive cultural experience.</p>
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

export default Culinary;
