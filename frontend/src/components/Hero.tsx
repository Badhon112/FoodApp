import hero from '../assets/hero.png'
// import food from '../assets/food.jpg'

const Hero = () => {
  return (
    <div>
        <img src={hero} alt="This is an Image" className='w-full max-h-[600px] object-cover' />
    </div>
  )
}

export default Hero