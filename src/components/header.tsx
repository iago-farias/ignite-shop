import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";
import Link from "next/link";
import * as Dialog from '@radix-ui/react-dialog';

import { Header } from "../styles/pages/app";
import { CartModal } from "../components/cart-modal";
import logoImg from '../../assets/logo.svg'
import { useShoppingCart } from "use-shopping-cart";

export function LayoutHeader() {
  const { cartCount } = useShoppingCart();

  return (
    <Header>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button">
            <Handbag size={24} />
            {
              cartCount && cartCount > 0 ? (
                <div>
                  {cartCount}
                </div>
              ) : null
            }
          </button>
        </Dialog.Trigger>
        <CartModal />
      </Dialog.Root>
    </Header>
  )
}