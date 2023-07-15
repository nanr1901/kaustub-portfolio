import React from "react";

function Languages() {
    var pythonimg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png';
    var cppimg = 'https://i.pinimg.com/originals/d2/0b/36/d20b362a9cf422dd0e056bf32ddde12c.jpg';
    var jsimg = 'https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png';
    var javaimg = 'https://cdn-icons-png.flaticon.com/512/226/226777.png';

    return (
    //   
    
    <section id="language">

    <div className="skills-heading">LANGUAGES</div>
      <div id="language-slide" className="carousel slide" data-ride='carousel'>
       <ol className="carousel-indicators">
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
    </ol>
      <div className="carousel-inner">
          <div className="carousel-item active">
          <div>
                <img className="d-block" src={pythonimg} alt="First slide" />
              </div>
              <div className="carousel-caption">
                <p>Python</p>
              </div>
          </div>
  
          <div className="carousel-item">
          <div>
                <img className="d-block" src={cppimg} alt="Second slide" />
              </div>
              <div className="carousel-caption">
                <p>C++</p>
              </div>
          </div>
          
          <div className="carousel-item">
          <div>
                <img className="d-block" src={jsimg} alt="Third slide" />
              </div>
              <div className="carousel-caption">
                <p>JavaScript</p>
              </div>
          </div>

          <div className="carousel-item">
          <div>
                <img className="d-block" src={javaimg} alt="First slide" />
              </div>
              <div className="carousel-caption">
                <p>Java</p>
              </div>
          </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#language-slide" data-bs-slide="prev" onClick={()=>console.log('hello')}>
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#language-slide" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
      </button>
      </div>
      </section>
    )
}

export default Languages;