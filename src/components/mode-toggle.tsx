import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Tabs value={theme} onValueChange={(value) => setTheme(value)}>
      <TabsList>
        <TabsTrigger value="light"><SunIcon /></TabsTrigger>
        <TabsTrigger value="dark"><MoonIcon /></TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}
