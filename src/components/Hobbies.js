import React from "react";

function Hobbies() {
    var readimg = 'https://media.wired.com/photos/5955c3573ff99d6b3a1d165c/3:2/w_1600%2Cc_limit/books.jpg';
    var ttimg = 'https://media.istockphoto.com/id/502189498/photo/table-tennis-ball-and-bat.jpg?s=612x612&w=0&k=20&c=FJ2A35yQlHI-6KFoKUfMHjqpXXkIZo1wFRZFJWgWk68=';
    var gymimg = 'https://qph.cf2.quoracdn.net/main-qimg-6ee738ec69d399c7c5fdc9585670c497.webp';
    
    return (
    <section id="hobby">
    <h1>HOBBIES</h1>
    <div id="hobby-slide" className="carousel slide" data-ride='carousel'>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <div className="row">
            <img src = {readimg} alt = 'readimg' className='col-lg-6 col-md-12 col-sm-12'/>
            <h2 className='col-lg-6 col-md-12 col-sm-12'>Reading</h2>
            </div>
        </div>

        <div className="carousel-item">
            <div className="row">
            <img src = {ttimg} alt = 'ttimg' className='col-lg-6 col-md-12 col-sm-12'/>
            <h2 className='col-lg-6 col-md-12 col-sm-12'>Table Tennis</h2>
            </div>
        </div>
        
        <div className="carousel-item">
            <div className="row">
            <img src = {gymimg} alt = 'gymimg' className='col-lg-6 col-md-12 col-sm-12'/>
            <h2 className='col-lg-6 col-md-12 col-sm-12'>Working out</h2>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#hobby-slide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#hobby-slide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
    </button>
    </div>
    </section>
    );
}



export default Hobbies;