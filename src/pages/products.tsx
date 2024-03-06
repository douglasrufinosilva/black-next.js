import Head from "next/head";
import { NextPage } from "next";

const Products: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nossos produtos</title>
        <meta name="description" content="Conheça os nossos produtos."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1>
          Nossos produtos
        </h1>      
    </>
  )
}

export default Products