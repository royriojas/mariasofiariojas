import React from 'react';
import Layout from './Layout';

const Index = ({ ...rest }) =>
  <Layout { ...rest }>
    <div className="main-container">
      <div className="picture">
        <img src="./img/MariaSofia3.png" />
        <h1><a href="https://www.facebook.com/mariasofia.riojastaboada">María Sofía Riojas</a></h1>

        <div className="ms-image" />
        <p>Para ti pequeña Chofita, a quién amo con todo mi corazón, una página hecha por tu papá, para tí.</p>
        <p>Como testimonio del amor que te tengo, a pesar de los problemas que hemos tenido para poder verte</p>
        <p>Te amo mucho hijita</p>
        <p>Tu padre que te ama</p>
        <p>&nbsp;</p>
        <p>Roy</p>
      </div>
    </div>
  </Layout>;

export default Index;
