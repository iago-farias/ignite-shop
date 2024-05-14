import Link from "next/link";
import { GetServerSideProps } from "next";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

import { ImageContainer, ProductsContainer, SuccessContainer } from "../styles/pages/success";
import { stripe } from "../lib/stripe";

interface SuccessProps {
  customerName: string;
  products: {
    productId: string;
    imageUrl: string;
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <ProductsContainer>
          {
            products.map((product, index) => (
              <ImageContainer
                key={product.productId}
                style={{
                  marginLeft: index > 0 ? -60 : 0,
                  zIndex: index + 1
                }}
              >
                <Image
                  src={product.imageUrl}
                  width={140}
                  height={140}
                  alt=""
                />
              </ImageContainer>
            ))
          }
        </ProductsContainer>
        <h1>Compra efetuada!</h1>


        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.length} camiseta{products.length === 1 ? " " : "s "}
          já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const customerName = session.customer_details?.name;
  const products = session.line_items?.data.map(lineItem => {
    const product = lineItem.price?.product as Stripe.Product;

    return {
      productId: product.id,
      imageUrl: product.images[0]
    }
  });

  return {
    props: {
      customerName,
      products
    }
  }
}