
import Link from 'next/link';
import { urlFor } from 'lib/api';
 const CardListItem = ({title,subtitle,image,date,author,link}) => {
    return (
        <>
          
          
      {/* <!--First card--> */}
      <div className="md:p-8 p-2    bg-white border-2">
        {/* <!--Banner image--> */}
        <img
          className=" h-36 w-full  object-cover"
          src={
            urlFor(image)
              .height(300)
              .crop('center')
              .fit('clip')
              .url()}
            alt="Card image cap"
          
        />

        {/* <!--Tag--> */}
        <p className="text-green-900 font-semibold text-base mt-2">Greenest</p>
        {/* <!--Title--> */}
        <h1
          className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate"
        >
          {title}
        </h1>
        {/* <!--Description--> */}
        <div className="max-w-full">
          <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
           {subtitle}
          </p>
        </div>
        { link &&
        <Link {...link}>
          <a className="card-button text-green-700">
            Read More
          </a>
        </Link>
      }
        <div className="flex items-center space-x-2 mt-20">
          {/* <!--Author's profile photo--> */}
          <img 
            className="w-10 h-10 object-contain object-center rounded-full"
            src={author?.avatar ||'https://via.placeholder.com/150'}
            alt="random user"
          />
          <div>
            {/* <!--Author name--> */}
            <p className="text-gray-900 font-semibold">{author?.name||'greenest'}</p>
            <p className="text-gray-500 font-semibold text-sm">
            {date}
            </p>
          </div>
        </div>
      </div>
      
      {/* <!--End of first card--> */}

    </>

    )
}
export default CardListItem;

