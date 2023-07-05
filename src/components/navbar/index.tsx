import { NavbarStyled, Menu } from './styles'
import icons from '@icons/index'
import { useLocation } from 'react-router-dom'

const menu = [
  { icon: icons.chartLine, page: 'home', name: 'Dashboard' },
  { icon: icons.facialCleanser, page: 'predictions', name: 'Predições' },
  { icon: icons.pieTwo, page: 'products', name: 'Produtos' }
]

const Navbar = () => {
  const location = useLocation().pathname
  return (
    <NavbarStyled>
      {menu.map((value, index) => (
        <Menu
          to={'/' + value.page}
          key={index}
          className={location === '/' + value.page ? value.page : ''}
        >
          <img src={value.icon} alt={'Icone ' + value.name} />
          <p>{value.name}</p>
        </Menu>
      ))}
    </NavbarStyled>
  )
}

export default Navbar
