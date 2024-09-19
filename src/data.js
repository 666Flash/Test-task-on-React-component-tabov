import fiRsList from './pictures/icon/fi-rs-list.png';
import fiRsCube from './pictures/icon/fi-rs-cube.png';
import fiRsBookAlt from './pictures/icon/fi-rs-book-alt.png';
import fiRsBoxAlt from './pictures/icon/fi-rs-box-alt.png';
import fiRsSettings from './pictures/icon/fi-rs-settings.png';
import fiRsUserAdd from './pictures/icon/fi-rs-user-add.png';
import fiRsBank from './pictures/icon/fi-rs-bank.png';
import fiRsApps from './pictures/icon/fi-rs-apps.png';
import fiRsEnvelope from './pictures/icon/fi-rs-envelope.png';
import fiRsShoppingCartCheck from './pictures/icon/fi-rs-shopping-cart-check.png';
import fiRsChartPie from './pictures/icon/fi-rs-chart-pie.png';
import fiRsBrowser from './pictures/icon/fi-rs-browser.png';
import fiRsPhoneCall from './pictures/icon/fi-rs-phone-call.png';
import fiRsThumbtack from './pictures/icon/fi-rs-thumbtack.png';
import fiRsShop from './pictures/icon/fi-rs-shop.png';

export const tabs = [
    {
        id: 1,
        title: 'Accounting',
        router: '/accounting',
        image: fiRsUserAdd,
        positionStatic: false
    },
    {
        id: 2,
        title: 'Administration',
        router: '/administration',
        image: fiRsSettings,
        positionStatic: true
    },
    {
        id: 3,
        title: 'Auswahllisten',
        router: '/auswahllisten',
        image: fiRsList,
        positionStatic: true
    },
    {
        id: 4,
        title: 'Banking',
        router: '/banking',
        image: fiRsBank,
        positionStatic: false
    },
    {
        id: 5,
        title: 'Dashboard',
        router: '/dashboard',
        image: fiRsApps,
        positionStatic: false
    },
    {
        id: 6,
        title: 'Einkauf',
        router: '/einkauf',
        image: fiRsShoppingCartCheck,
        positionStatic: false
    },
    {
        id: 7,
        title: 'Help',
        router: '/help',
        image: fiRsBookAlt,
        positionStatic: false
    },
    {
        id: 8,
        title: 'Lagerverwaltung',
        router: '/lagerverwaltung',
        image: fiRsBoxAlt,
        positionStatic: false
    },
    {
        id: 9,
        title: 'Post Office',
        router: '/post-office',
        image: fiRsEnvelope,
        positionStatic: false
    },
    {
        id: 10,
        title: 'Rechn',
        router: '/rechn',
        image: fiRsBrowser,
        positionStatic: false
    },
    {
        id: 11,
        title: 'Statistik',
        router: '/statistik',
        image: fiRsChartPie,
        positionStatic: false
    },
    {
        id: 12,
        title: 'Tab Anpinnen',
        router: '/tab-anpinnen',
        image: fiRsThumbtack,
        positionStatic: false
    },
    {
        id: 13,
        title: 'Telefonie',
        router: '/telefonie',
        image: fiRsPhoneCall,
        positionStatic: false
    },
    {
        id: 14,
        title: 'Verkauf',
        router: '/verkauf',
        image: fiRsShop,
        positionStatic: false
    },
    {
        id: 15,
        title: 'Warenbestand',
        router: '/warenbestand',
        image: fiRsCube,
        positionStatic: false
    },
]