import App from './App'
import InCart from './components/in-cart/InCart'
import ItemList from './components/items-list/ItemsList'
import WelcomePage from './components/welcome-page/WelcomePage'

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                path: '',
                element: <WelcomePage />,
            },
            {
                path: 'shop',
                element: <ItemList />,
            },
            {
                path: 'cart',
                element: <InCart />,
            }
        ]
    },
]

export default routes