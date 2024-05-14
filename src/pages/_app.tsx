import { AppProps } from "next/app";

import { CartProvider } from "use-shopping-cart";

import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import { LayoutHeader } from "../components/header";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {


  return (
    <CartProvider
      shouldPersist
      cartMode="client-only"
      stripe={process.env.STRIPE_PUBLIC_KEY as string}
      successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`${process.env.NEXT_URL}/`}
      mode="payment"
      currency="BRL"
    >
      <Container>
        <LayoutHeader />

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}