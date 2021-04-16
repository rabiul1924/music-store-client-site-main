import React from 'react';
import Guitar from '../../../images/guitar4.jpg'
const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={Guitar} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1 style={{color:'red'}}>Guitar Happiness</h1>
                        <p className="text-secondary my-5">
                        A person who plays a guitar instrument is called a guitarist. A person who makes or fixes guitar instruments is a luthier, which comes from the word "lute". The word "lute", comes from the Arabic "Al-Uud", a stringed instrument from the Middle East. The guitar appears to be derived from earlier instruments known in ancient central Asia as the Sitara. Instruments very similar to the guitar appear in ancient carvings and statues recovered from the old Iranian capitol of Susa. The modern word, guitar, was adopted into English from the Spanish word guitarra, which came from the older Greek word kithara. Possible sources for various names of musical instruments that guitar could be derived from appear to be a combination of two Indo-European roots[source?]: guit-, similar to Sanskrit sangeet meaning "music", and -tar a widely found root meaning "cord" or "string". The word guitar is a word that the Iberian Arabic language took from the Persian language. The word qitara is an Arabic name for various members of the lute family that preceded the Western guitar. The word guitarra was introduced into Spanish when such instruments were brought into Iberia by the Moors after the 10th century.
                        </p>
                        <button className="btn btn-danger">More Info</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;