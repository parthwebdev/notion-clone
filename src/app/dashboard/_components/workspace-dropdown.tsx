"use client";

import Link from "next/link";
import { useState } from "react";

import { ChevronsLeftRight, PlusIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SelectWorkspace } from "@/lib/supabase/schema";

const WorkspaceDropdown = ({
  workspaces,
  defaultValue,
}: {
  workspaces: SelectWorkspace[];
  defaultValue: SelectWorkspace | undefined;
}) => {
  // const [selectedWorkspace, setSelectedWorkspace] = useState(defaultValue);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center text-sm p-2 w-full hover:bg-primary/5 border rounded-md"
        >
          <div className="gap-x-2 flex flex-1 items-center">
            {defaultValue ? (
              <>
                <span className="h-5 w-5">{defaultValue.icon}</span>

                <span className="text-start font-medium line-clamp-1">
                  {defaultValue.title}
                </span>
              </>
            ) : (
              "Select a Workspace"
            )}
          </div>

          <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/dashboard/create" className="flex gap-2 items-center">
            <PlusIcon className="size-4" />
            <p>Create a Workspace</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {workspaces.map((workspace) => (
          <DropdownMenuItem key={workspace.id} className="cursor-pointer">
            <Link
              href={`/dashboard/${workspace.id}`}
              className="flex gap-2 items-center"
            >
              <span>{workspace.icon}</span>
              <p>{workspace.title}</p>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkspaceDropdown;