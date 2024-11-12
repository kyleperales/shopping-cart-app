import App from "./App";
import ItemList from "./components/items-list/ItemsList";
import WelcomePage from "./components/welcome-page/WelcomePage";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [            
            {
                index: true,
                path: 'welcome',
                element: <WelcomePage />,
            },
            {
                path: 'shop',
                element: <ItemList />,
            }
        ]
    },
];

export default routes;