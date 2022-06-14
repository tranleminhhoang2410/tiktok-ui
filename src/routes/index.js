//Layouts
import { HeaderOnly } from '~/layouts'

//Pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'

import config from '~/config/routes'


const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.followings, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }