import { AppProps } from "next/app";
import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";
import Link from "next/link";
import * as Dialog from '@radix-ui/react-dialog';

import { globalStyles } from "../styles/global";
import logoImg from '../../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";
import { CartModal } from "../components/cart-modal";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button type="button">
              <Handbag size={24} />

              <div>
                1
              </div>
            </button>
          </Dialog.Trigger>
          <CartModal />
        </Dialog.Root>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}