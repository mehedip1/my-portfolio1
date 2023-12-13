

const About = () => {
    return (
        <div>
            <h1 className="text-5xl text-center text-white">About me</h1>
            <p className="text-white mt-2 mx-5">I, am designer & developer with a passion for web design. I enjoy developing simple, clean and sick websites that provider real value to the end user. Thousands of clients have procured exceptional resulfs while woring with me.Delivering work within time and budget which meets  clients requirements in our meta.  </p>
            <section className="flex gap-5 mt-10  mx-10 px-10 ms-2 text-center">
                <div className="text-white font-semibold">
                    <p>Name:</p>
                    <h3 className="text-xl">Mehedi Hasan</h3>
                </div>
                <div className="text-white font-semibold ">
                    <p>Email:</p>
                    <h3 className="text-xl">mehdihassanstuO@gmail.com</h3>
                </div>
                <div className="text-white font-semibold">
                    <p>Date of birth:</p>
                    <h3 className="text-xl">30/06/1998</h3>
                </div>
                <div className="text-white font-semibold ">
                    <p>From:</p>
                    <h3 className="text-xl">Rajshahi, Bangladesh.</h3>
                </div>
               
            </section>
        </div>
    );
};

export default About;