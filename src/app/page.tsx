import Intro from '../sections/Intro';
import Layout from '@/components/Layout';

const Home: React.FC = () => {

  return (

    <Layout currentActive="home">
      <Intro />
    </Layout>
  );
};

export default Home;
