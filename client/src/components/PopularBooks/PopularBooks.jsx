import './PopularBooks.css'
import { galleryData } from '../../Data/data'
import { useState } from 'react';
import TitleTypeOne from './TitleTypeOne';

export default function PopularBooks () {

    const [activeButton, setActiveButton] = useState('all');

    const handleFilterChange = (category) => {
        setActiveButton(category);
    }

    const filterItems = activeButton === 'all' ? galleryData : galleryData.filter((item)=> item.category === activeButton);

    return (
        <section className='flex PopularBooks bg-white rounded-3xl'>
            <div className="flex-c container popularbooks-container p-1 rounded-full text-3xl bg-white font-bold"> 
                <TitleTypeOne TitleTop={'Some Quality Items'} Title={'POPULAR BOOKS'} className={'popularbooks-title'} />
                <div className="filter-buttons">
                    <button 
                      className={activeButton === 'all' ? 'active' : ''} 
                      onClick={() => handleFilterChange('all')}
                    >
                        All
                    </button>
                    <button
                       className={activeButton === 'Business' ? 'active' : ''} 
                       onClick={() => handleFilterChange('Business')}
                    >
                        Business
                    </button>
                    <button
                       className={activeButton === 'Technology' ? 'active' : ''} 
                       onClick={() => handleFilterChange('Technology')}
                    >
                        Technology
                    </button>
                    <button
                       className={activeButton === 'Adventure' ? 'active' : ''} 
                       onClick={() => handleFilterChange('Adventure')}
                    >
                        Adventure
                    </button>
                    <button
                       className={activeButton === 'Romantic' ? 'active' : ''} 
                       onClick={() => handleFilterChange('Romantic')}
                    >
                        Romantic
                    </button>
                    <button
                       className={activeButton === 'Fictional' ? 'active' : ''} 
                       onClick={() => handleFilterChange('Fictional')}
                    >
                        Fictional
                    </button>
                </div>
                {/* .......Filter Books Content....... */ }
                <div className="gallery">
                    {
                        filterItems.map(({name, writer, price, image}, index)=>{
                            return (
                                <div className='flex'>
                                    <div className="gallery-items" key={index}>
                                        <div className="popularbook-image">
                                        <img src={image} alt=""/>
                                        </div>
                                        <div className="popularbook-info">
                                            <h4>{name}</h4>
                                            <div><small>{writer}</small></div>
                                            <h5><span>{price}</span></h5>
                                        </div>
                                    </div>
                                </div>    
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}