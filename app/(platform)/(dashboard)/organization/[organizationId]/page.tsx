"use client"
import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/db";
import { Suspense } from "react";

import { Separator } from "@/components/ui/separator";

import { Info } from "./_components/info";
import { BoardList } from "./_components/board-list";
// import { checkSubscription } from "@/lib/subscription";

const OrganizationIdPage = () => {
  // const isPro = await checkSubscription();
  const isPro = true;

  // const boards = await db.board.findMany();
  return (
    <div className="w-full mb-20">

      <Info isPro={isPro} />

      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage;