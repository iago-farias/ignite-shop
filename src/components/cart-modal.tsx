import { X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { useShoppingCart } from 'use-shopping-cart';
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

import { Cart, CartItem, CartItemImageContainer, CartItemListContainer, CloseButtonContainer } from '../styles/components/cart-modal';

export function CartModal() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  const { cartDetails, cartCount, totalPrice, redirectToCheckout, removeItem } = useShoppingCart();

  const cartItems = cartDetails ? Object.values(cartDetails) : [];

  async function handleCheckout() {
    try {
      if (cartItems.length === 0) {
        return;
      }

      setIsCreatingCheckoutSession(true);
      const response = await axios.post('/api/checkout', {
        lineItems: cartItems.map(cartItem => {
          return {
            price: cartItem.price_id,
            quantity: 1,
          }
        })
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)

      alert("Falha ao redirecionar ao checkout.");
      setIsCreatingCheckoutSession(false);
    }
  }

  function handleRemoveCartItem(cartItemId: string) {
    removeItem(cartItemId);
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay
        style={{
          position: "fixed",
          inset: 0,
          animation: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      <Dialog.Content>
        <Cart>
          <CloseButtonContainer>
            <Dialog.Close asChild>
              <button>
                <X size={24} />
              </button>
            </Dialog.Close>
          </CloseButtonContainer>

          <h1>Sacola de compras</h1>
          <CartItemListContainer>
            {
              cartItems.map(cartItem => (
                <CartItem key={cartItem.id}>
                  <CartItemImageContainer>
                    {
                      cartItem.image ? (
                        <Image
                          src={cartItem.image}
                          width={94}
                          height={94}
                          alt=''
                        />
                      ) : null
                    }
                  </CartItemImageContainer>

                  <div>
                    <span>{cartItem.name}</span>
                    <strong>{cartItem.formattedPrice}</strong>

                    <button onClick={() => handleRemoveCartItem(cartItem.id)}>
                      Remover
                    </button>
                  </div>
                </CartItem>
              ))
            }
          </CartItemListContainer>

          <footer>
            <div>
              <span>Quantidade</span>
              <span>{cartCount} ite{cartCount === 1 ? "m" : "ns"}</span>
            </div>

            <div>
              <strong>Valor total</strong>
              <strong>
                {
                  totalPrice ? new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  }).format(totalPrice / 100) : 0
                }
              </strong>
            </div>

            <button
              disabled={isCreatingCheckoutSession}
              onClick={handleCheckout}
            >
              Finalizar compra
            </button>
          </footer>
        </Cart>
      </Dialog.Content>
    </Dialog.Portal>
  )
}