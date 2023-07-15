import React from "react";

function Hobbies() {
    var readimg = 'https://media.wired.com/photos/5955c3573ff99d6b3a1d165c/3:2/w_1600%2Cc_limit/books.jpg';
    var ttimg = 'https://media.istockphoto.com/id/502189498/photo/table-tennis-ball-and-bat.jpg?s=612x612&w=0&k=20&c=FJ2A35yQlHI-6KFoKUfMHjqpXXkIZo1wFRZFJWgWk68=';
    var gymimg = 'https://qph.cf2.quoracdn.net/main-qimg-6ee738ec69d399c7c5fdc9585670c497.webp';
    
    return (
        <section id="hobby">

        <div className="skills-heading">HOBBIES</div>
          <div id="hobby-slide" className="carousel slide" data-ride='carousel'>
           <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
          <div className="carousel-inner">
              <div className="carousel-item active">
              <div>
                    <img className="d-block" src={readimg} alt="First slide" />
                  </div>
                  <div className="carousel-caption hobby-caption">
                    <p>Reading</p>
                  </div>
              </div>
      
              <div className="carousel-item">
              <div>
                    <img className="d-block" src={ttimg} alt="Second slide" />
                  </div>
                  <div className="carousel-caption hobby-caption">
                    <p>Table Tennis</p>
                  </div>
              </div>
              
              <div className="carousel-item">
              <div>
                    <img className="d-block" src={gymimg} alt="Third slide" />
                  </div>
                  <div className="carousel-caption hobby-caption">
                    <p>Working out</p>
                  </div>
              </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#hobby-slide" data-bs-slide="prev" onClick={()=>console.log('hello')}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#hobby-slide" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
          </button>
          </div>
          </section>
    );
}



export default Hobbies;