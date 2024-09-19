import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";


import Rechn from "../pages/Rechn"
import Auswahllisten from "../pages/Auswahllisten"
import Warenbestand from "../pages/Warenbestand"
import Help from "../pages/Help"
import Administration  from "../pages/Administration"
import Einkauf from "../pages/Einkauf"
import Statistik from "../pages/Statistik"
import Verkauf from "../pages/Verkauf"
import Accounting from "../pages/Accounting"
import Banking from "../pages/Banking"
import PostOffice from "../pages/PostOffice"
import Telefonie from "../pages/Telefonie"
import Lagerverwaltung from "../pages/Lagerverwaltung"
import Dashboard from "../pages/Dashboard"
import TabAnpinnen from "../pages/TabAnpinnen"

export const privateRoutes = [
]

export const publicRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
    {path: '/login', component: Login, exact: true},
    {path: '/rechn', component: Rechn, exact: true},
    {path: '/auswahllisten', component: Auswahllisten, exact: true},
    {path: '/warenbestand', component: Warenbestand, exact: true},
    {path: '/help', component: Help, exact: true},
    {path: '/administration', component: Administration, exact: true},
    {path: '/einkauf', component: Einkauf, exact: true},
    {path: '/statistik', component: Statistik, exact: true},
    {path: '/verkauf', component: Verkauf, exact: true},
    {path: '/accounting', component: Accounting, exact: true},
    {path: '/banking', component: Banking, exact: true},
    {path: '/post-office', component: PostOffice, exact: true},
    {path: '/telefonie', component: Telefonie, exact: true},
    {path: '/lagerverwaltung', component: Lagerverwaltung, exact: true},
    {path: '/dashboard', component: Dashboard, exact: true},
    {path: '/tab-anpinnen', component: TabAnpinnen, exact: true},
]
