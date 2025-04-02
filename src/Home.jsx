
import HeroSlider from "./component/HeroSlider";
import MarqueText from './component/MarqueText'
import HomeCategories from './component/HomeCategories'
import IntroContent from './component/IntroContent'
import NumberData from './component/NumberData'

const  Home = () => {
  return(
    <>    
<HeroSlider />
<MarqueText/>
<HomeCategories/>
<IntroContent/>
<img src="./staticImage.jpg" alt="staticImage.jpg"/>
<NumberData/>
</>
  )
}

export default Home;