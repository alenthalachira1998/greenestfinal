import BlockContent from '@sanity/block-content-to-react';
import { urlFor } from 'lib/api';
const serializers = {  
  types:{
    // eslint-disable-next-line react/display-name
    image: ({node: {asset, alt, position='center'}}) => { 
  
   
   
      return (
       
        <div className={`blog-image flex flex-col  blog-image-${position}`}>
          <img src={urlFor(asset).height(600).fit('max').url()} />
          
          <div className="image-alt italic text-center text-gray-500">{alt}</div>
        </div>
     
      )
    }
    }
  }


const BlogContent = ({content}) =>
<div className="xl:text-lg text-xs md:text-sm">
  <BlockContent
    serializers={serializers}
    blocks={content}
  />
</div>

export default BlogContent;