import ContacUs from '@components/contact-us'
import Navbar from '@components/navbar'
import { SidebarStyled, LogoMenu } from './styles'
import logo from '@images/logo.svg'

const Sidebar = () => {
  return (
    <SidebarStyled>
      <LogoMenu>
        <img src={logo} alt="Logo W3erp" />
      </LogoMenu>
      <Navbar />
      <ContacUs />
    </SidebarStyled>
  )
}

export default Sidebar
