import Image from "next/image";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import { useKeenSlider } from 'keen-slider/react';
import Link from "next/link";
import { Handbag } from "@phosphor-icons/react";
import { useShoppingCart } from "use-shopping-cart";

import { HomeContainer, Product } from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stripe";
import Head from "next/head";

interface HomeProps {
  products: Product[]
}

type Product = {
  id: string;
  name: string;
  imageUrl: string;
  priceFormatted: string;
  price: number;
  priceId: string;
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });
  const { addItem } = useShoppingCart();

  function handleAddProductToCart(product: Product) {
    addItem({
      name: product.name,
      id: product.id,
      price_id: product.priceId,
      image: product.imageUrl,
      currency: "BRL",
      price: product.price
    });
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {
          products.map(product => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.priceFormatted}</span>
                  </div>

                  <button onClick={() => handleAddProductToCart(product)}>
                    <Handbag size={24} />
                  </button>
                </footer>
              </Product>
            </Link>
          ))
        }
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      priceFormatted: price.unit_amount ? new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(price.unit_amount / 100) : 0,
      price: price.unit_amount,
      priceId: price.id
    }
  });

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2
  }
}