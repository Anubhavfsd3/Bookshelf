import { latestArticleData } from "../../Data/data";
import TitleTypeOne from "../PopularBooks/TitleTypeOne";
import { Link } from "react-router-dom";
import { ImFacebook } from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';
import './LatestArticle.css'



export default function LatestArticle() {
    return (
       <section className="latestArticle bg-white text-2xl p-3">
          <div className="container latest-article-container">
            <TitleTypeOne Title={'latest Articles'} TitleTop={'Read Our Articles'} className="font-bold"/>

            <div className="latest-article-content">
                {
                    latestArticleData.map(({titLink, title, date, instLink, fbLink, twitaLink, inspiration, image}, index) => {
                        return(
                           <article className="lastest-article" key={index}>
                                <div className="article-image">
                                   <img src={image} alt="" />
                                </div>
                                <div className="article-info">
                                    <h5>{date}</h5>
                                    <Link to={titLink}>
                                        <h3 className="text-black">{title}</h3>     
                                    </Link>
                                </div>
                                <div className="latest-article-socials">
                                    <p>{inspiration}</p>
                                    <div className="article-social">
                                        <a href={fbLink}><ImFacebook/></a>
                                        <a href={instLink}><FiInstagram/></a>
                                        <a href={twitaLink}>< RiTwitterXLine/></a>
                                    </div>
                                     
                                </div>

                           </article>
                        )
                    })
                }
            </div>
          </div>
       </section>        
    )
}