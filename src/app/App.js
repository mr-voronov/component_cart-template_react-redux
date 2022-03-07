import './App.css';
import { GoodsList, CartList } from './pages';

export default function App() {
    return(
        <div className='app'>
            <GoodsList />
            <CartList />
        </div>
    );
}
