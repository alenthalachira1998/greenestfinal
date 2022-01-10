import { getBlogBySlug,getAllBlogs } from 'lib/api';
import BlogHeader from 'components/BlogHeader';
import BlogContent from 'components/BlogContent';
import { urlFor } from 'lib/api';
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import Menu2 from "components/Menu2";
import Link from 'next/link'
// import { useRouter } from 'next/router'; 

const BlogDetail = ({blog}) => {
  // const { query } = useRouter();
  //below return
     {/* <h1>Hello Detail Page - {query?.slug}</h1> */}
      {/* <h1>Hello Detail Page - {blog?.slug}</h1> */}
      
  return (
   <>
  
   <div className="fixed bg-black pb-4   overflow-x-hidden  lg:top-0  w-full flex justify-center z-10">
        <img
          src="/logo.png"
          alt="Picture of the author"
          className="relative top-2 w-40 h-12 "
        />
    
      <div className="absolute overflow-x-hidden  px-2 lg:px-6  top-3 flex w-screen justify-between ">

        <Menu2 />
     
        <div className="flex text-3xl z-10  lg:text-5xl text-gray-200 ">
          {" "}
          <div className="hover:text-pink-800 hover:animate-ping">
          <AiOutlineInstagram />
          </div>
          <Link href="https://www.facebook.com/GreenestBuildings/">    
          <a className="hover:text-blue-400 hover:animate-ping">
          <AiOutlineFacebook />
          </a>
          </Link>
        </div>
      </div>
      </div>
   
     <div className="absolute  flex px-4 pt-20 lg:mx-80  xl:mx-96 flex-col  justify-center   ">
        <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            // coverImage={blog.coverImage}
            coverImage={urlFor(blog.coverImage).height(600).url()}
            author={blog.author}
            date={blog.date}
          />
  
          <BlogContent content={blog.content}/>
          <footer className="text-center  text-gray-600 py-5">
          &#169; Greenestone Buildings
          </footer>
     </div>

   </>
  )
}
export async function getStaticProps({params}) {
  console.log('Fetching blog by', params.slug)
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {blog}
  }
}

export  async function getStaticPaths() {
  // console.log('Getting paths for every page')
  const blogs=await getAllBlogs();
  const paths=blogs?.map(b=>(
    {
    
      params:{slug:b.slug}
       
    })
  )
  return {
    paths,
    
    fallback: false
  }
}


export default BlogDetail;