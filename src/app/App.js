import './App.css';
import GoodsList from './containers/GoodsList';
import CartList from './containers/CartList';

export default function App() {
    return(
        <div className='app'>
            <GoodsList />
            <CartList />
        </div>
    );
}
