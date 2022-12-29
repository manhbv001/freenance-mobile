import CreateCategoryScreen from '../screens/CreateCategory';
import CreateTransactionScreen from '../screens/CreateTransaction';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import SearchScreen from '../screens/Search/ index';
import SettingsScreen from '../screens/Settings';

const Screens = {
  Home: 'home',
  CreateCategory: 'create_category',
  Search: 'search',
  Settings: 'settings',
  CreateTransaction: 'create_transaction',
  Login: 'login',
};

const navigationRoutes = [
  {
    name: Screens.Home,
    component: HomeScreen,
    options: {
      title: 'Home',
      headerShown: false,
    },
  },
  {
    name: Screens.CreateCategory,
    component: CreateCategoryScreen,
    options: {
      title: 'Thêm chuyên mục',
    },
  },
  {
    name: Screens.Search,
    component: SearchScreen,
    options: {
      title: 'Tìm kiếm',
    },
  },
  {
    name: Screens.CreateTransaction,
    component: CreateTransactionScreen,
    options: {
      title: 'Thêm giao dịch',
    },
  },
  {
    name: Screens.Settings,
    component: SettingsScreen,
    options: {
      title: 'Cài đặt',
    },
  },
  {
    name: Screens.Login,
    component: LoginScreen,
    options: {
      headerShown: false,
    },
  },
];

export default {
  navigationRoutes,
  Screens,
};
