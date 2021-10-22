import './Header.css'
import IconButton from '@material-ui/core/IconButton'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
const Header = ()=>{
    return (
        <div className="header">
            <IconButton>
               <AccountCircleIcon className="header__icon"/> 
            </IconButton>
            <img src="logo192.png" alt="app logo" className="header__logo" />
            <IconButton>
               <MenuRoundedIcon className="header__icon"/> 
            </IconButton> 
        </div>
    )
}
export default Header