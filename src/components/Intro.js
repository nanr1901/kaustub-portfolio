import React from 'react'

function Intro() {
    // var img_url='https://wallpapers.com/images/hd/binary-code-code-numbers-green-glow-agx3h70ga36galq2.jpg'
    return (
        <section id='intro'>
            <div className='container-fluid overlay'>
            <div className='row'>
            <div className='IntroText col-lg-6 col-md-12 col-sm-12'>
                <h1>Hi I'm Kaustub Sreekrishnan</h1>
                <h3 className='l1'>I'm a Computer Science Undergrad studying in BIT Mesra.</h3> 
                <h3 className='l2'>I love learning and exploring new fields in the world of Computer Science</h3>
            </div>
            {/* <img src={img_url} alt='Cashew img' className='col-lg-6 col-md-12 col-sm-12'/> */}
            </div>
            </div>
        </section>
    )
}

export default Intro