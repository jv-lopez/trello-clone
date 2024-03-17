"use client"

import { CardModal } from "@/components/modals/card-modal"
import { ProModal } from "@/components/modals/pro-modal";
import { useIsMounted } from "usehooks-ts";



type Props = {}

export const ModalProvider = (props: Props) => {

  const isMounted = useIsMounted();
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CardModal />
      <ProModal />
    </>
  )
}