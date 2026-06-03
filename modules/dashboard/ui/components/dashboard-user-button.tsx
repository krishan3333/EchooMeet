"use client";

import { ChevronDownIcon, CreditCardIcon, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";
import { GeneratedAvatar } from "@/components/generated-avatar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export const DashboardUserButton = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (!session) return null;

  const onLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/sign-in"),
      },
    });
  };

  return (
    <DropdownMenu>
      <SidebarMenuItem>
        <DropdownMenuTrigger
          render={<SidebarMenuButton className="h-12 w-full" />}
        >
          {session.user.image ? (
            <Avatar className="size-8 mr-2 shrink-0">
              <AvatarImage src={session.user.image} alt={session.user.name} />
            </Avatar>
          ) : (
            <GeneratedAvatar
              seed={session.user.name}
              variant="initials"
              className="size-8 mr-2 shrink-0"
            />
          )}
          <div className="flex flex-col items-start text-left overflow-hidden">
            <span className="text-sm font-medium truncate w-full">
              {session.user.name}
            </span>
            <span className="text-xs text-muted-foreground truncate w-full">
              {session.user.email}
            </span>
          </div>
          <ChevronDownIcon className="ml-auto size-4 shrink-0" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-56">
          <DropdownMenuGroup>
            <DropdownMenuLabel className="flex flex-col">
              <span>{session.user.name}</span>
              <span className="text-xs font-normal text-muted-foreground">
                {session.user.email}
              </span>
            </DropdownMenuLabel>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <CreditCardIcon className="size-4 mr-2" />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onLogout}>
            <LogOutIcon className="size-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </SidebarMenuItem>
    </DropdownMenu>
  );
};
