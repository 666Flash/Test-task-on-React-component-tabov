import { BiListUl } from "react-icons/bi";
import { BiCube } from "react-icons/bi";
import { BiBookOpen } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { BsBank } from "react-icons/bs";
import { FiGrid } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { BiPieChartAlt2 } from "react-icons/bi";
import { BsCreditCard2Front } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { BsPinAngle } from "react-icons/bs";
import { AiOutlineShop } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineCreditCard } from "react-icons/ai";

export const tabs = [
    {
        id: 1,
        title: 'Accounting',
        router: '/accounting',
        image: <FiUserPlus/>,
        positionStatic: false
    },
    {
        id: 2,
        title: 'Administration',
        router: '/administration',
        image: <FiSettings />,
        positionStatic: true
    },
    {
        id: 3,
        title: 'Auswahllisten',
        router: '/auswahllisten',
        image: <BiListUl/>,
        positionStatic: true
    },
    {
        id: 4,
        title: 'Banking',
        router: '/banking',
        image: <BsBank />,
        positionStatic: false
    },
    {
        id: 5,
        title: 'Dashboard',
        router: '/dashboard',
        image: <FiGrid/>,
        positionStatic: false
    },
    {
        id: 6,
        title: 'Einkauf',
        router: '/einkauf',
        image: <BsCartCheck/>,
        positionStatic: false
    },
    {
        id: 7,
        title: 'Help',
        router: '/help',
        image: <BiBookOpen/>,
        positionStatic: false
    },
    {
        id: 8,
        title: 'Lagerverwaltung',
        router: '/lagerverwaltung',
        image: <AiOutlineCreditCard/>,
        positionStatic: false
    },
    {
        id: 9,
        title: 'Post Office',
        router: '/post-office',
        image: <FiMail/>,
        positionStatic: false
    },
    {
        id: 10,
        title: 'Rechn',
        router: '/rechn',
        image: <BsCreditCard2Front/>,
        positionStatic: false
    },
    {
        id: 11,
        title: 'Statistik',
        router: '/statistik',
        image: <BiPieChartAlt2/>,
        positionStatic: false
    },
    {
        id: 12,
        title: 'Tab Anpinnen',
        router: '/tab-anpinnen',
        image: <BsPinAngle/>,
        positionStatic: false
    },
    {
        id: 13,
        title: 'Telefonie',
        router: '/telefonie',
        image: <FiPhoneCall/>,
        positionStatic: false
    },
    {
        id: 14,
        title: 'Verkauf',
        router: '/verkauf',
        image: <AiOutlineShop/>,
        positionStatic: false
    },
    {
        id: 15,
        title: 'Warenbestand',
        router: '/warenbestand',
        image: <BiCube/>,
        positionStatic: false
    },
]