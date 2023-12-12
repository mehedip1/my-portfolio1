
import img4 from '../../assets/card/img4.jpg'
const Banner = () => {
    return (
        <div className='grid grid-cols-2 gap-3'>


                  <div className='items-center text-center text-white mx-5 px-10 mt-5'>
               <p className='text-2xl font-semibold'>Hi,</p>
               <h3 className='text-4xl font-medium'>My Name is</h3>
               <h1 className='text-5xl font-bold text-teal-500'>MEHEDI</h1>
               <p className='text-xl  font-semibold'>web developer</p>
               <button  className='btn btn-outline btn-success -rounded mt-2'>Hire me

         </button>
          </div>

            <div className='me-5'>
         <img className='' src={img4}  alt="" />
        </div>
       
      

           
       
        </div>
    );
};

export default Banner;