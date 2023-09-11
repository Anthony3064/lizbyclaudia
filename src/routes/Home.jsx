import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Services from '../components/Services'
import Layout from './layout/Layout'
const Home = () => {
    return (
        <Layout >
            <Main>
                <Banner />
                <Services />
                <Contact />
            </Main>
        </Layout>
    )
}
export default Home
