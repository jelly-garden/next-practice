import Head from 'next/head'

function HeadInfo({title, keywords, contents}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="content-type" content="text/html" charSet='utf-8' />
                <meta name="robots" content="index, follow" />
                <meta keywords={keywords}/>
                <meta contents={contents}/>
            </Head>
        </div>
    )
}

HeadInfo.defaultProps = {
    title: 'My Blog',
    keywords: 'Next.js 로 구동되는 사이트',
    contents: 'Next.js 연습'
}

export default HeadInfo
