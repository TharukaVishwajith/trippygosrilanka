export interface Tour {
    id: string;
    title: string;
    description: string;
    image: string;
    duration: string;
    price: string;
    tags: string[];
}

export const toursData: Tour[] = [
    {
        id: '1',
        title: 'Cultural Triangle Explorer',
        description: 'Explore the ancient cities of Anuradhapura, Polonnaruwa, and Sigiriya.',
        image: '/assets/image-2.png', // Placeholder
        duration: '5 Days',
        price: '$450',
        tags: ['Culture', 'History', 'Heritage']
    },
    {
        id: '2',
        title: 'Hill Country Escape',
        description: 'Scenic train rides, tea plantations, and misty mountains in Ella and Nuwara Eliya.',
        image: '/assets/image-3.png', // Placeholder
        duration: '4 Days',
        price: '$380',
        tags: ['Nature', 'Scenic', 'Relaxation']
    },
    {
        id: '3',
        title: 'Southern Coast Beach Hop',
        description: 'Relax on the pristine beaches of Mirissa, Unawatuna, and Galle.',
        image: '/assets/image-1.png', // Placeholder
        duration: '6 Days',
        price: '$550',
        tags: ['Beach', 'Relaxation', 'Sun']
    },
    {
        id: '4',
        title: 'Wildlife Safari Adventure',
        description: 'Spot leopards and elephants in Yala and Udawalawe National Parks.',
        image: '/assets/image-2.png', // Placeholder
        duration: '3 Days',
        price: '$300',
        tags: ['Wildlife', 'Adventure', 'Nature']
    },
    {
        id: '5',
        title: 'Ultimate Sri Lanka Loop',
        description: 'A complete tour covering culture, hills, and beaches.',
        image: '/assets/image-3.png', // Placeholder
        duration: '10 Days',
        price: '$1200',
        tags: ['Culture', 'Nature', 'Beach', 'Adventure']
    }
];

export const allTags = Array.from(new Set(toursData.flatMap(tour => tour.tags)));
