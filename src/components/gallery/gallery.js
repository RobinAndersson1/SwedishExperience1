import React from 'react';
import gallery01 from './gallery01.png';
import gallery02 from './gallery02.png';
import gallery03 from './gallery03.png';
import gallery04 from './gallery04.png';
import gallery05 from './gallery05.png';
import gallery06 from './gallery06.png';
import gallery07 from './gallery07.png';
import gallery08 from './gallery08.png';
import gallery09 from './gallery09.png';
import gallery10 from './gallery10.png';
import gallery11 from './gallery11.png';
import gallery12 from './gallery12.png';
import gallery13 from './gallery13.png';
import gallery14 from './gallery14.png';
import gallery15 from './gallery15.png';

class Gallery extends React.Component {
    render() {
        return (
            <div className="gallery">
                
                <img className="gallery01" src={gallery01} alt="gallery01" />
                <img className="gallery02" src={gallery02} alt="gallery02" />
                <img className="gallery03" src={gallery03} alt="gallery03" />
                <img className="gallery04" src={gallery04} alt="gallery04" />
                <img className="gallery05" src={gallery05} alt="gallery05" />
                <img className="gallery06" src={gallery06} alt="gallery06" />
                <img className="gallery07" src={gallery07} alt="gallery07" />
                <img className="gallery08" src={gallery08} alt="gallery08" />
                <img className="gallery09" src={gallery09} alt="gallery09" />
                <img className="gallery10" src={gallery10} alt="gallery10" />
                <img className="gallery11" src={gallery11} alt="gallery11" />
                <img className="gallery12" src={gallery12} alt="gallery12" />
                <img className="gallery13" src={gallery13} alt="gallery13" />
                <img className="gallery14" src={gallery14} alt="gallery14" />
                <img className="gallery15" src={gallery15} alt="gallery15" />
                

            </div>
        )
    }
}

export default Gallery;