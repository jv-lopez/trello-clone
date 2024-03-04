"use client";

import { ElementRef, useRef, useState } from "react";
// import { Draggable, Droppable } from "@hello-pangea/dnd";

import { cn } from "@/lib/utils";
import { ListWithCards } from "@/types";

// import { CardForm } from "./card-form";
// import { CardItem } from "./card-item";
import { ListHeader } from "./list-header";

type ListItemProps = {
  data: ListWithCards;
  index: number;
}

export const ListItem = ({
  data,
  index,
}: ListItemProps) => {
  const textareaRef = useRef<ElementRef<"textarea">>(null);

  const [isEditing, setIsEditing] = useState(false);

  const disableEditing = () => {
    setIsEditing(false);
  };

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current?.focus();
    });
  };


  return (
    <li className="shrink-0 h-full w-[272px] select-none">
      <div className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-2">
        <ListHeader
          onAddCard={enableEditing}
          data={data}
        />
      </div>
    </li>
  )
}