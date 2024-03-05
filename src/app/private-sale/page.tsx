import PrivateSale from "../components/PrivateSale"
import AuthCheck from "../components/common/AuthCheck"
import Container from "../components/common/Container"
import Sparkle from "../components/svgs/Sparkle"

const TokenSale = () => {
  
  return (
    <AuthCheck>
      <div 
    className="min-h-screen flex items-center justify-center"
    style={{
        background: 'linear-gradient(#00000070, #00000070) ,url(/images/nova.png)', 
        backgroundSize: 'cover', 
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "center", 
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden'
    }}>
        
      <img src="./images/texture.png" className='absolute z-0 h-[533px] w-[1054px] transform -rotate-[3px] -top-[120px] -right-[326px]' />
        <img src='./images/metal-face.png' className='absolute left-[-200px] rotate-[16deg] top-[50%] opacity-[0.5]' />
            <Sparkle className='absolute left-[200px] top-[300px]' />
            <Sparkle className='absolute left-[40px] top-[600px]' />
            <Sparkle className='absolute right-[200px] top-[500px]' />
        <Container>
            <PrivateSale />
        </Container>
    </div>
    </AuthCheck>
  )
}

export default TokenSale