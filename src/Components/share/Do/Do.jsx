import js from '../../../assets/card/js.png'
import react from '../../../assets/card/react.png'
import node from '../../../assets/card/nodejs.png'
import mongo from '../../../assets/card/mongo.png'


const Do = () => {
    return (
        <div className="text-center text-white mt-10">
           <h1 className="text-5xl">What I Do..</h1> 
           <p className="text-center mt-5 py-5">I have more than 01 years experience building software for clients all ovar the world.Below is a quick overview of my mind technical skill sets and technologies i ues. Want to find out more about my experience?
           Check out my online resume and project portfolio.</p>
           <section className='flex gap-5'>

           <div className="card max-w-md shadow-lg">
     <figure className="px-10 pt-10">
    <img src={js} alt="pic" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center text-white">
    <h2 className="card-title">React</h2>
    <p>List skill/technologies here.You can change the icon above to any of the 1500+ FontAwesome5 free icons available. </p>
    
  </div>
         </div>
           <div className="card max-w-md shadow-lg">
     <figure className="px-10 pt-10">
    <img src={react} alt="pic" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center text-white">
    <h2 className="card-title">React</h2>
    <p>List skill/technologies here.You can change the icon above to any of the 1500+ FontAwesome5 free icons available. </p>
    
  </div>
         </div>
           <div className="card max-w-md shadow-lg">
     <figure className="px-10 pt-10">
    <img src={mongo} alt="pic" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center text-white">
    <h2 className="card-title">React</h2>
    <p>List skill/technologies here.You can change the icon above to any of the 1500+ FontAwesome5 free icons available. </p>
    
  </div>
         </div>
           <div className="card max-w-md shadow-lg">
     <figure className="px-10 pt-10">
    <img src={node} alt="pic" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center text-white">
    <h2 className="card-title">React</h2>
    <p>List skill/technologies here.You can change the icon above to any of the 1500+ FontAwesome5 free icons available. </p>
    
  </div>
         </div>
         

           </section>
        </div>
    );
};

export default Do;