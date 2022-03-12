import { getBlogBySlug,getAllBlogs } from 'lib/api';
import BlogHeader from 'components/BlogHeader';
import BlogContent from 'components/BlogContent';
import { urlFor } from 'lib/api';
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import Menuu from "components/Menuu";
import Link from 'next/link'
// import { useRouter } from 'next/router';

const BlogDetail = ({blog}) => {
  // const { query } = useRouter();
  //below return
     {/* <h1>Hello Detail Page - {query?.slug}</h1> */}
      {/* <h1>Hello Detail Page - {blog?.slug}</h1> */}

  return (
   <div className="w-screen ">

   {/* <div className="fixed bg-black pb-4   overflow-x-hidden  lg:top-0  w-full flex justify-center z-10">
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
      </div> */}
      <div className="absolute bg-white w-screen pt-4 pb-4  lg:right-10 text-center flex justify-center  z-10">
        <img
          src="/logo.png"
          alt="Picture of the author"
          className=" md:h-14 md:w-auto  h-10 w-32"
        />

      </div>
      <div className="absolute pl-2 pr-2 pb-2 pt-4 lg:px-4 lg:pb-4 lg:pt-6 flex w-screen justify-between ">
 <Link href='/'><a className="z-50"><img src="/logoo.png" className="md:ml-4 ml-2 md:w-8 w-8 h-auto  md:h-auto  drop-shadow-2xl brightness-150 saturate-200 "/></a></Link>
     <div className="z-40"></div>
        <div className="flex  text-3xl mr-3  lg:text-5xl text-gray-200 ">

       <Menuu/>

        </div>
      </div>

     <div className="text-sm lg:text-base Font-Open  max-w-5xl  mb-10 lg:mt-10 flex px-4 pt-20 lg:mx-80    xl:mx-auto flex-col  justify-center   ">
        <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            // coverImage={blog.coverImage}
            coverImage={urlFor(blog.coverImage).height(1200).url()}
            //author={blog.author}
            date={blog.date}
          />

          <BlogContent content={blog.content}/>
          <footer className="text-center    text-gray-600 py-5">
          &#169; Greenest 
          </footer>
     </div>

   </div>
  )
}
export async function getStaticProps({params}) {
  console.log('Fetching blog by', params.slug)
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {blog},
    revalidate: 10, 
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

    fallback: true
  }
}


export default BlogDetail;