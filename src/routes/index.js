// layouts
import { HeaderOnly } from '~/components/layouts';

// pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: '*', component: NotFound, layout: null },
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
