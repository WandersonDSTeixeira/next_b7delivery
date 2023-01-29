import styles from './styles.module.css';
import MenuIcon from './menu.svg';
import CartIcon from './cart.svg';
import OrderIcon from './order.svg';
import LogoutIcon from './logout.svg';

type Props = {
    color: string;
    label: string;
    icon: 'menu' | 'cart' | 'order' | 'logout';
    onClick: () => void;
}

export const SidebarMenuItem = ({  color, label, icon, onClick }: Props) => {

    return (
        <div className={styles.container} onClick={onClick}>
            {icon === 'menu' && <MenuIcon color={color} />}
            {icon === 'cart' && <CartIcon color={color} />}
            {icon === 'order' && <OrderIcon color={color} />}
            {icon === 'logout' && <LogoutIcon color={color} />}            
            <span>{label}</span>
        </div>
    );
}