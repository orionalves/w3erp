import { NavbarStyled, Menu } from './styles'
import icons from '@icons/index'

const menu = [
  { icon: icons.chartLine, page: 'Dashboard' },
  { icon: icons.facialCleanser, page: 'Predições' },
  { icon: icons.pieTwo, page: 'Produtos' }
]

const Navbar = () => {
  return (
    <NavbarStyled>
      {menu.map((value, index) => (
        <Menu key={index}>
          <img src={value.icon} alt={value.page} />
          <p>{value.page}</p>
        </Menu>
      ))}
    </NavbarStyled>
  )
}

export default Navbar
