import React from 'react';
import Head from 'next/head';
import { Container } from '../styles/pages/Home';

// import fotoPerfil from '../assets/foto2.jpg';

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                {/* Colocar tags de SEO aqui */}
                <title>Portifólio</title>
            </Head>

            <main>
                <h1>Hello World</h1>
                <img src="foto.jfif" alt="Foto de perfil" />
            </main>
        </Container>
    );
};

export default Home;
