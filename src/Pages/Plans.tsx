import PlansHero from '../Components/Plans/PlansHero'
import PricingPlans from '../Components/Plans/PricingPlans'
import Signals from '../Components/Plans/Signals'
import StillNotSure from '../Components/Plans/StillNotSure'
import TradingSignals from '../Components/Plans/TradingSignals'
import WhoIsThisFor from '../Components/Plans/WhoIsThisFor'
import WhyThisCourse from '../Components/Plans/WhyThisCourse'

const Plans = () => {
  return (
    <div>
      <PlansHero />
      <WhyThisCourse />
      <TradingSignals />
      <WhoIsThisFor />
      <StillNotSure />
      <PricingPlans />
      <Signals />
    </div>
  )
}

export default Plans