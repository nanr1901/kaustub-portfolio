import React from "react";

function Skills() {
  var webdevimg =
    "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png";
  var algoimg =
    "https://i.pinimg.com/originals/cf/d6/86/cfd6862b2c500f941f6ef46a5ebe60ea.jpg";
  var aiimg =
    "https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep_Learning_Applications.jpg";
  return (
    <section id="skill">

  <div className="skills-heading">SKILLS</div>
    <div id="skills-slide" className="carousel slide" data-ride='carousel'>
     <ol className="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
    <div className="carousel-inner">
        <div className="carousel-item active">
        <div>
              <img className="d-block" src={algoimg} alt="First slide" />
            </div>
            <div className="carousel-caption">
              <p>Algorithms</p>
            </div>
        </div>

        <div className="carousel-item">
        <div>
              <img className="d-block" src={webdevimg} alt="Second slide" />
            </div>
            <div className="carousel-caption">
              <p>Web Dev</p>
            </div>
        </div>
        
        <div className="carousel-item">
        <div>
              <img className="d-block" src={aiimg} alt="Third slide" />
            </div>
            <div className="carousel-caption">
              <p>AI</p>
            </div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#skills-slide" data-bs-slide="prev" onClick={()=>console.log('hello')}>
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#skills-slide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
    </button>
    </div>
    </section>
  );
}

export default Skills;
