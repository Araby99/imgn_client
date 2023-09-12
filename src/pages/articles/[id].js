import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default () => {
    const router = useRouter();
    const { id } = router.query
    const [articles, setArticles] = useState();
    useEffect(() => {
        if (id) {
            axios.get(`/articles/${id}`).then(result => {
                setArticles(result.data)
            })
        }
    }, [id])
    if (!articles) {
        return (
            <p>spinner</p>
        )
    }
    return (
        <>
            <Head>
                <title>IMGN | {articles.title}</title>
            </Head>
            <div className='text-right container mx-auto py-20 text-white'>
                <p className="font-bold text-3xl">{articles.title}</p>
                <div className="w-full py-10">
                    <img src={articles.hero} alt={articles.title} className='w-full h-1/2 object-contain' />
                </div>
                <p className="description">{articles.description}</p>
            </div>
        </>
    )
}
