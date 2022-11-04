import mealsImage from '../../assets/meals.jpg'
import { HeaderStyled, ImageWrapper } from './styles';

function Header() {
    return (
        <>
            <HeaderStyled>
                <h1>React Meals</h1>
                <button>Cart</button>
            </HeaderStyled>
            <ImageWrapper>
                <img src={mealsImage} alt="A table full of food!" />
            </ImageWrapper>
        </>
    );
}

export default Header;