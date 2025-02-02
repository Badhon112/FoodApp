import landing from '../assets/landing.png'
const Homepages = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-700">
          Make your delivery
        </h1>
        <span className="text-xl">
            Click your food
        </span>
      </div>
      <div className="grid gap-5">
        <img src={landing} alt="Landing page is here" className='' />
      </div>
    </div>
  );
};

export default Homepages;
