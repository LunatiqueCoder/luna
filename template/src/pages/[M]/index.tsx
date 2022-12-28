import {GetStaticPaths, GetStaticProps} from 'next';
import {Home} from '../../features/Home';
import {Layout} from '../../components';

const HomePage = () => (
  <Layout>
    <Home />
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const params = [{theme: 'light'}, {theme: 'dark'}];

  return {
    paths: params.map(p => ({params: {M: p.theme}})),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const megaparam = context.params?.M as string;

  return {
    props: {
      params: {M: megaparam},
    },
  };
};

export default HomePage;
