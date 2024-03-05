import TokenSaleCalculator from "../components/TokenSale/TokenSaleCalculator"
import TokenSaleHeroSection from "../components/TokenSale/TokenSaleHeroSection"
import Container from "../components/common/Container"


const TokenSale = () => {
  return (
    <div style={{
        background: 'linear-gradient(#00000070, #00000070) ,url(/images/nova.png)', 
        backgroundSize: 'cover', 
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "center", 
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden'
    }}>
        
        <img src='./images/metal-face.png' className='absolute left-[-200px] rotate-[16deg] top-[50%] opacity-[0.5]' />
        <Container>
            <TokenSaleHeroSection />
            <TokenSaleCalculator />
        </Container>
    </div>
  )
}

export default TokenSale