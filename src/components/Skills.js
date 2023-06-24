import React from "react";

function Skills() {
    var webdevimg = "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png";
    var algoimg = 'https://digitalschoolofmarketing.co.za/wp-content/uploads/2019/08/shutterstock_1132115675-e1565861088572.jpg';
    var aiimg = 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep_Learning_Applications.jpg';
    return (
    <section id="skill">
    <h1>SKILLS</h1>
    <div id="skill-slide" className="carousel slide" data-ride='carousel'>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <div className="row">
            <img src = {algoimg} alt = 'Algorithms Img' className='col-lg-6 col-md-12 col-sm-12'/>
            <h2 className='col-lg-6 col-md-12 col-sm-12'>Algorithms</h2>
            </div>
        </div>

        <div className="carousel-item">
            <div className="row">
            <img src = {webdevimg} alt = 'Web Dev Img' className='col-lg-6 col-md-12 col-sm-12'/>
            <h2 className='col-lg-6 col-md-12 col-sm-12'>Web Development</h2>
            </div>
        </div>
        
        <div className="carousel-item">
            <div className="row">
            <img src = {aiimg} alt = 'AI Img' className='col-lg-6 col-md-12 col-sm-12'/>
            <h2 className='col-lg-6 col-md-12 col-sm-12'>Maching Learning/Deep Learning</h2>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#skill-slide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#skill-slide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
    </button>
    </div>
    </section>
    );
}

export default Skills;