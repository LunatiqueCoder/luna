import {Linking} from '../../features/Linking';
import {Layout} from '../../components';
import {GetStaticPaths, GetStaticProps} from 'next';

const LinkingPage = () => (
  <Layout>
    <Linking />
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

export default LinkingPage;
