import {useState } from 'react'
import clapping from "../../../src/assets/Icons/clapping.svg"
import heartRed from "../../../src/assets/Icons/heart-red.svg"
import heartBlack from "../../../src/assets/Icons/heart-black.svg"
import "./Card.css"
import { getFormattedDateFromUtcDate } from '../../utils/common'
import { BlogData } from '../../types'
import makeRequest from '../../utils/makeRequest'
import { UPDATE_BLOG_DATA } from '../../constants/apiEndPoints'

// type CardProps = {
//     date:string,
//     readingTime:string,
//     title:string,
//     description:string,
//     claps:number,
//     liked:boolean, 
//     image:string,
//     // setCount :(value: number | ((prevVar: number) => number)) => void;
//     // setCount:Dispatch<SetStateAction<boolean>>;  
// }


interface BlogCardProps  {
    blogData: BlogData
}

const Card: React.FC<BlogCardProps> = ({blogData}) => {

//   const handleClick = () => {
//     setCount(count+1)
//   }

//   const handleToggle = () => {
//     setHeart(!heart)
//   }

  const [clapCount, setClapCount] = useState(blogData.claps);
  const [isLiked, setIsLiked] = useState(blogData.liked);

  const handleClap = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(blogData.id), {
        data: { claps: clapCount + 1 },
      });
      setClapCount(clapCount + 1);
    } catch (e) {
     console.log(e);
     
    }
  };

  const handleLike = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(blogData.id), {
        data: { liked: !isLiked },
      });
      setIsLiked(!isLiked);
    } catch (e) {
        console.log(e);
    }
  };
  console.log(blogData)

  const likedImage = isLiked ? heartRed : heartBlack
  return (
    
        <div className="app--blocks-block" data-testid='card'>
            
                <div>
                    <img src={blogData.image} alt=""/>
                </div>
                <div className="block--timestamp">
                    <p>{getFormattedDateFromUtcDate(blogData.date)}</p>
                    <p>{blogData.reading_time}</p>       
                </div>
                <div className="block--description">
                    <h2>{blogData.title}</h2>
                    <p>{blogData.description}</p>
                </div>
                <hr/>
            
            <div className="block--icons">
                <div className="block--clap">
                    <img src={clapping} alt="" data-testid='count-img' onClick={handleClap}/>
                    <p data-testid='count'>{clapCount}</p>
                </div>
                <div>
                    <img src={likedImage} data-testid='img' onClick={() => handleLike()} alt=""/> 
                </div>
            </div>
        </div>
   
  )
}

export default Card