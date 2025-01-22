import BlogsComponent from '@/sections/Blogs';
import Layout from '@/components/Layout';

const Blogs: React.FC = () => {
  return (
    <Layout currentActive="blogs">
      <BlogsComponent />
    </Layout>
  );
};

export default Blogs;
