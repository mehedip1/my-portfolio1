import img2 from '../../assets/card/img2.jpg'

const Project = () => {
    return (
        <div className="grid grid-cols-2 gap-5">
         <div>
              <h1 className='text-5xl text-white mx-5'>Got a project in mind?</h1>
                <img className='mt-10 mx-5' src={img2} alt="" />
              </div>
            <section >
             
                <div className='flex gap-5 text-white  mb-5 mt-5 mx-5'>
               
             <div>
             <p className='text-white'>Your Name</p>
             <input  type="name" name='name' placeholder="name" className="input input-bordered text-white w-full max-w-xs" />
             </div>
             <div>
             <p className='text-white'>Your Email</p>
             <input  type="name" name='name' placeholder="email" className="input input-bordered text-white w-full max-w-xs" />
             </div>
            
        
                </div>
                <div>
             <p className='text-white mx-5 px-2 py-2'>Your message</p>
             <textarea className="textarea textarea-bordered w-full max-w-xs py-10 mx-5" placeholder="message"></textarea>
             </div>
            </section>
        </div>
    );
};

export default Project;