import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router'

function index() {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <h2>image {router.query.id}</h2>
            <Link href="/photos">
                <a>Go Back</a>
            </Link>
        </div>
    )
}

export default index
