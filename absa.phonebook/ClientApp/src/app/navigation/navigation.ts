import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'menu',
        title    : 'MENU',
        type     : 'group',
        children: [
            // {
            //     id: 'home',
            //     title: 'Home',
            //     type: 'item',
            //     icon: 'home',
            //     url: '/home'
            // },
            {
                id: 'contact',
                title: 'Phonebook',
                type: 'item',
                icon: 'contact_phone',
                url: '/contact'
            }
        ]
    }
];