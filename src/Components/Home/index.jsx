import Head from '../../Helper/Head';
import Feed from '../Feed';
import styles from './Home.module.css'


const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head title="Fotos" description="Home do site doguinhos, com várias fotos de doguinhos maravilhosos." />
      <Feed />
    </section>
  )
}

export default Home
