import Head from 'next/head'

interface IHead {
    title?: string 
    description?: string 
    image?: string 
}

export  function HeadComponent({ title, description, image } : IHead) {
    
    const apiURL = '';

    return (
        <Head>
            <meta name="description" content={description} />

            {/*Open Graph Facebook*/}
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:url" content="https://gps.com.br" />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content="Guiadas para o Sucesso" />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${apiURL}upload/uploads/download/${image}`} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="400" />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={`${apiURL}upload/uploads/download/${image}`} />
        </Head>
    )
}