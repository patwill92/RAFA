import Home from './components/Home.vue';
import Contact from './components/contact/Contact.vue'
import Header from './components/Header.vue';
import HomeOne from './components/homepage/HomeOne.vue';
import HomeTwo from './components/homepage/HomeTwo.vue';
import HomeThree from './components/homepage/HomeThree.vue';
import Arrow from './components/homepage/Arrow.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact }
];