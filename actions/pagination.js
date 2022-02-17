import { useSWRPages } from 'swr';
import { useGetBlogs } from 'actions';
import CardListItem from 'components/CardListItem';

export const useGetBlogsPages = ({blogs}) => {

    return useSWRPages(
      'index-page',
      ({offset, withSWR}) => {
        let initialData = !offset && blogs;
        const { data: paginatedBlogs } =  withSWR(useGetBlogs({offset}, initialData));
        if (!paginatedBlogs) { return 'Loading...'}
        return paginatedBlogs
      .map(blog =>


        <CardListItem key={blog.slug} title={blog.title}
          subtitle={blog.subtitle} date={blog.date} image={blog.coverImage} author={blog.author} link={{
            href: '/blogs/[slug]',
            as: `/blogs/${blog.slug}`
          }} />
      )
        },
        (SWR, index) => {
            if (SWR.data && SWR.data.length === 0) { return null; }
            return (index + 1) * 3;
          },
      
        )
      }
    