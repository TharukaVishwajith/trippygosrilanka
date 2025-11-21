'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function ConditionalHeader() {
    const pathname = usePathname();
    
    // Don't render header on studio routes
    if (pathname?.startsWith('/studio')) {
        return null;
    }
    
    return <Header />;
}

