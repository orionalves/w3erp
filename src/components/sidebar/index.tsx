import ContacUs from '@components/contact-us'
import Navbar from '@components/navbar'
import { SidebarStyled, LogoMenu } from './styles'

const Sidebar = () => {
  return (
    <SidebarStyled>
      <LogoMenu>
        <img src="logo.svg" alt="Logo W3erp" />
      </LogoMenu>
      <Navbar />
      <ContacUs />
    </SidebarStyled>
  )
}

export default Sidebar
