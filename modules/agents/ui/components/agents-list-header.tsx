"use client";

import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewAgentDialog } from "./new-agent-dialog";

export const AgentsListHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        <h5 className="text-xl font-medium">My Agents</h5>
        <Button onClick={() => setIsDialogOpen(true)}>
          <PlusIcon />
          New Agent
        </Button>
      </div>
      <NewAgentDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
};
