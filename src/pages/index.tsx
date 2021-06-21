import React from 'react';
import Head from 'next/head';
import { Container } from '../styles/pages/Home';
import PresentationCard from '../components/PresentationCard';

// import fotoPerfil from '../assets/foto2.jpg';

// Adicionar Card Presentation (repetir nas outras pages, o card não carrega novamente)
// page => Home
//

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>Portifólio</title>
            </Head>

            <main>
                <PresentationCard />

                <section></section>
                <h1>Hello World</h1>
            </main>
        </Container>
    );
};

export default Home;
