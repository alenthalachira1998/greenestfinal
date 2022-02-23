export default function BlogHeader({title, subtitle, coverImage, date}) {
    return (
      <>
      <div className="blog-detail-header">
        <p className="lead mb-0">
          {/* <div className="flex mb-4">
          <img
            src={author?.avatar}
            className="rounded-circle "
            height="20px"
            width="20px"
            alt="avatar"/>
         <h1 className="text-green-800  pl-2 self-center font-bold"> {author?.name}</h1>    </div> */}
         
      
        </p>
        <h1 className=" text-green-900 text-xl lg:text-2xl blog-detail-header-title mb-0">{title}</h1>
        <h2 className="blog-detail-header-subtitle text-base lg:text-lg text-blue-800 font-semibold  mb-3">{subtitle}</h2>
          {/* Check if contains cover image */}
          <img
            className="w-full"
            src={coverImage} alt="TODO: provide alt"/>
           <div className="text-xs text-gray-400"> {date}</div>
      </div>
   
    </>

    )
  }