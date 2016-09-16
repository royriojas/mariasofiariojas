import React from 'react';
import Layout from './Layout';

const Index = ({ ...rest }) =>
  <Layout { ...rest }>
    <div className="main-container">
      <div className="picture">
        <img src="./img/MariaSofia3.png" />
        <h1><a href="https://www.facebook.com/mariasofia.riojastaboada">María Sofía Riojas</a></h1>
        <p>Mi pequeña hija. Esta página está dedicada a ti, dado que la familia de tu madre y tu madre solo nos dejan verte por una hora por semana. Nosotros, tu familia paterna, y yo tu padre te amamos mucho hija. Y esperamos de corazón que esto cambie pronto. Estamos entrampados en un montón de líos legales que ojalá a la larga nos permitan verte.</p>
        <p>Tu no tienes la culpa hija, la intransigencia y tozudez de la familia de tu madre te daña y ellos no se dan cuenta.</p>
        <p>Pero mi niña: No hay mal que dure cien años. Ni cuerpo que lo resista</p>
        <p>Tu Padre que te ama.</p>
        <p>Roy Riojas</p>
        <div className="ms-image" />
        <p>Para ti pequeña Chofita... a quién amo con todo mi corazón... y no se me permite verte ni saber nada de ti hace más de un año</p>
        <p>
          La familia de tu madre te siente su propiedad, y no quieren que yo tenga contacto alguno contigo, ni siquiera aceptan los regalos que te llevé.
          Sólo les preocupa saber cuánto dinero me podrán sacar como parte del juicio por alimentos que me han entablado.
        </p>
        <p>Me exigen una suma exhorbitante, sin embargo no permiten que ni mi familia ni yo tengamos contacto contigo... Yo te paso una cantidad acorde a tu edad, aparte de un seguro particular con Rimac para tu salud, y conforme vayas necesitando más veré de hacerte llegar más</p>
        <p>Mi Pequeña Chofita, ésta página es para ti, para que un día la veas y sepas que contrario a lo que te puedan decir, tanto yo como mi familia solo tenemos amor para ti... y te extrañamos y necesitamos muchísimo.</p>
        <p>Vamos a iniciar todas las acciones legales del caso, para poder tenerte nuevamente cerca mi bebita bella.</p>
      </div>
    </div>
  </Layout>;

export default Index;
