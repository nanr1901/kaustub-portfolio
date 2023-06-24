import React from "react";

function Projects() {
    var malimg = 'https://www.fisherstech.com/wp-content/uploads/2021/04/machine-learning-malware-detection.jpg';
    var cctvimg = 'https://www.fujitsu.com/downloads/blog/fgb/2021-01-20/fgb_20210120_01_index_pic_1.jpg';
    var pfimg = 'https://elementor.com/cdn-cgi/image/f=auto,w=768,h=402/marketing/wp-content/uploads/2021/02/Cover-2019.04.30-Portfolio-2-768x402-1.png';
    return (
    <section id="project">
    <h1>PROJECTS</h1>
    <div id="project-slide" className="carousel slide" data-ride='carousel'>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <div className="row">
            <img src = {malimg} alt = 'malimg' className='img col-lg-6 col-md-12 col-sm-12'/>
            <h2 className='col-lg-6 col-md-12 col-sm-12'>Malware detection using neural networks</h2>
            </div>
        </div>

        <div className="carousel-item">
            <div className="row">
            <img src = {cctvimg} alt = 'cctvimg' className='img col-lg-6 col-md-12 col-sm-12'/>
            <h2 className='col-lg-6 col-md-12 col-sm-12'>Crime Classification based on cctv footage</h2>
            </div>
        </div>
        
        <div className="carousel-item">
            <div className="row">
            <img src = {pfimg} alt = 'pfimg' className='img col-lg-6 col-md-12 col-sm-12'/>
            <h2 className='col-lg-6 col-md-12 col-sm-12'>Personal portfolio website</h2>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#project-slide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#project-slide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
    </button>
    </div>
    </section>
    );
}

export default Projects;