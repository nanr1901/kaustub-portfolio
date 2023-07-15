import React from "react";

function Projects() {
    var malimg = 'https://www.fisherstech.com/wp-content/uploads/2021/04/machine-learning-malware-detection.jpg';
    var cctvimg = 'https://www.fujitsu.com/downloads/blog/fgb/2021-01-20/fgb_20210120_01_index_pic_1.jpg';
    var pfimg = 'https://elementor.com/cdn-cgi/image/f=auto,w=768,h=402/marketing/wp-content/uploads/2021/02/Cover-2019.04.30-Portfolio-2-768x402-1.png';
    return (
        <section id="project">

        <div className="skills-heading">PROJECTS</div>
          <div id="project-slide" className="carousel slide" data-ride='carousel'>
           <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
          <div className="carousel-inner">
              <div className="carousel-item active">
              <div>
                    <img className="d-block" src={malimg} alt="First slide" />
                  </div>
                  <div className="carousel-caption proj-caption">
                    <p>Malware detection using neural networks</p>
                  </div>
              </div>
      
              <div className="carousel-item">
              <div>
                    <img className="d-block" src={cctvimg} alt="Second slide" />
                  </div>
                  <div className="carousel-caption proj-caption">
                    <p>Crime classification using CCTV footage</p>
                  </div>
              </div>
              
              <div className="carousel-item">
              <div>
                    <img className="d-block" src={pfimg} alt="Third slide" />
                  </div>
                  <div className="carousel-caption proj-caption">
                    <p>Personal portfolio website</p>
                  </div>
              </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#project-slide" data-bs-slide="prev" onClick={()=>console.log('hello')}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#project-slide" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
          </button>
          </div>
          </section>
    );
}

export default Projects;