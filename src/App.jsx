import './App.css'
import Navbar from './components/Navbar';


function App() {

  return (
    <>
    <Navbar />
    <div className="row header">
      <img src="/public/violeta.png" className='img-fondo' alt="" />
      <img src="/public/brillos.png" className='img-superpuesta' alt="" />
      <h1>Hablemos sobre Género y Tecnología</h1>
    </div>
    <div className="container">
      <div className="row content">
        <div className="col"><img src="/public/im-2.jpg" alt="" /></div>
        <div className="col">
        <h2>Información sobre la realidad de la brecha de género en IT</h2>
        <small>En esta charla presentamos informacion sobre la realidad, cual es la presencia femenina en el rubro IT, en qué áreas técnicas nos desempeñamos, presentamos la brecha de género visible no solo en el mercado local sino internacional. 
          Luego, pasamos a hablar de sesgos y el impacto que tienen en la tecnología que construimos, que por supuesto afecta a la sociedad toda.</small></div>
        <div className="col">
          <h2>Accionables</h2>
          <small>Finalmente, dejamos una serie de propuestas, porque entendemos que solamente señalar un problema no construye y estamos para construir en comunidad, le llamamos <br />Guía de Consejos, revelamos qué podemos hacer para trabajar sobre estos sesgos y construir tecnología que nos incluya a todas y a todos.</small>
          </div>
        <div className="col"><img src="/public/img-1.png" alt="" /></div>
      </div>
    </div>
    <div className="container">
      <div className="row inscription">
        <h2>Inscribite a las charlas</h2>
        <small>Las charlas no tienen costo pero sí cupos limitados. Inscribite a la próxima a través del siguiente link</small>
        <h4>Quiero inscribirme</h4>
      </div>
    </div>
    <div className="row footer">   
      <h5>@ Mujeres IT copyright 2022. Todos los derechos reservados</h5>
    </div>
    </>
    
  );
}

export default App
