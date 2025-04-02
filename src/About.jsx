import IntroContent from './component/IntroContent'
import NumberData from './component/NumberData'
import BreadCumbs from './component/BreadCumbs'

const  Home = () => {
  return(
    <> 
<BreadCumbs 
        className="" 
        breadcumTitle="About US" 
        title="about impulse"
      />
<img src="./staticImage.jpg" alt="staticImage.jpg"/>
<NumberData/>
<IntroContent/>
</>
  )
}

export default Home;