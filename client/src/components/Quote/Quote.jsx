import './Quote.css'

import TitleTypeOne from '../PopularBooks/TitleTypeOne'
import { quoteData } from '../../Data/data'


export default function Quote (){
    return(
        <section className='Quote p-1 rounded-3xl bg-white'>
            <div className="container quote-container">
                <TitleTypeOne Title={'Quote of the day'} ClassName='quote-title p-1' />
                    {
                        quoteData.map(({quote, speaker}, index)=>{
                            return(
                                <article key={index}>
                                    <p className='mt-5'>{quote}</p>
                                    <h4 className='px-1'>{speaker}</h4>
                                </article>  
                            )
                        })
                    }
                
            </div>
        </section>
    )
}