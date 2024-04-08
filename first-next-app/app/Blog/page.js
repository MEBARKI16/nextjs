import React from 'react'
import Link from 'next/link';

const page = () => {
    return (
        <main>
            <h1>The Blog</h1>
            <p>
                <Link href="/Blog/post-1">
                    Poste 1
                </Link>
            </p>
            <p>
                <Link href="/Blog/post-2">
                    Poste 2
                </Link>
            </p>
        </main>
    )
}

export default page