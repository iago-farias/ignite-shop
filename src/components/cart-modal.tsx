import { X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';

import { Cart, CartItem, CartItemImageContainer, CartItemListContainer, CloseButtonContainer } from '../styles/components/cart-modal';

export function CartModal() {
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
              <button type='button'>
                <X size={24} />
              </button>
            </Dialog.Close>
          </CloseButtonContainer>

          <h1>Sacola de compras</h1>
          <CartItemListContainer>

            <CartItem>
              <CartItemImageContainer>

              </CartItemImageContainer>

              <div>
                <span>Camiseta Beyond the Limits</span>
                <strong>R$ 79,90</strong>

                <button type='button'>
                  Remover
                </button>
              </div>
            </CartItem>

          </CartItemListContainer>

          <footer>
            <div>
              <span>Quantidade</span>
              <span>3 itens</span>
            </div>

            <div>
              <strong>Valor total</strong>
              <strong>R$ 270,00</strong>
            </div>

            <button type="button">
              Finalizar compra
            </button>
          </footer>
        </Cart>
      </Dialog.Content>
    </Dialog.Portal>
  )
}