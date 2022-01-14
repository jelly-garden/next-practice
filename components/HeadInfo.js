import Head from 'next/head'

function HeadInfo({title, keywords, contents}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta keywords={keywords}/>
                <meta contents={contents}/>
            </Head>
        </div>
    )
}

HeadInfo.defaultProps = {
    title: 'My Blog',
    keywords: 'My Blog powered by Next.js',
    contents: 'Practice Next.js'
}

export default HeadInfo
