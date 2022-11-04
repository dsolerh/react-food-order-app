import mealsImage from '../../assets/meals.jpg'
import CartButton from './CartButton';
import { HeaderStyled, ImageWrapper } from './styles';

interface HeaderProps {
    onOpenCart: () => void
}

function Header({ onOpenCart }: HeaderProps) {
    return (
        <>
            <HeaderStyled>
                <h1>React Meals</h1>
                <CartButton onClick={onOpenCart} />
            </HeaderStyled>
            <ImageWrapper>
                <img src={mealsImage} alt="A table full of food!" />
            </ImageWrapper>
        </>
    );
}

export default Header;