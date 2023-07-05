import { NavbarStyled, Menu, ContentMenu } from './styles'
import icons from '@icons/index'
import { useLocation } from 'react-router-dom'

const menu = [
  { icon: icons.pieTwo, page: 'home', name: 'Dashboard' },
  { icon: icons.chartLine, page: 'predictions', name: 'Predições' },
  { icon: icons.facialCleanser, page: 'products', name: 'Produtos' }
]

const Navbar = () => {
  const location = useLocation().pathname
  return (
    <NavbarStyled>
      {menu.map((value, index) => (
        <ContentMenu>
          <Menu
            to={'/' + value.page}
            key={index}
            className={location === '/' + value.page ? 'current' : ''}
          >
            <img src={value.icon} alt={'Icone ' + value.name} />
            <p>{value.name}</p>
          </Menu>
        </ContentMenu>
      ))}
    </NavbarStyled>
  )
}

export default Navbar
