import React from "react";

function Languages() {
    var pythonimg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png';
    var cppimg = 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1264479/retina_1708x683_COVER-dcbcd112f1d502d97d7f2467c1ce21da.png';
    var jsimg = 'https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png';
    var javaimg = 'https://cdn-icons-png.flaticon.com/512/226/226777.png';

    return (
        <section id="language">
    <h1>LANGUAGES</h1>
    <div id="language-slide" className="carousel slide" data-ride='carousel'>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <div className="row">
            <img src = {pythonimg} alt = 'Python img' className='col-lg-6 col-md-12 col-sm-12'/>
            <h2 className='col-lg-6 col-md-12 col-sm-12'>Python</h2>
            </div>
        </div>

        <div className="carousel-item">
            <div className="row">
            <img src = {cppimg} alt = 'cpp img' className='col-lg-6 col-md-12 col-sm-12'/>
            <h2 className='col-lg-6 col-md-12 col-sm-12'>C & C++</h2>
            </div>
        </div>
        
        <div className="carousel-item">
            <div className="row">
            <img src = {jsimg} alt = 'js img' className='col-lg-6 col-md-12 col-sm-12'/>
            <h2 className='col-lg-6 col-md-12 col-sm-12'>JavaScript</h2>
            </div>
        </div>
        <div className="carousel-item">
            <div className="row">
            <img src = {javaimg} alt = 'java img' className='col-lg-6 col-md-12 col-sm-12'/>
            <h2 className='col-lg-6 col-md-12 col-sm-12'>Java</h2>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#language-slide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#language-slide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
    </button>
    </div>
    </section>
    )
}

export default Languages;