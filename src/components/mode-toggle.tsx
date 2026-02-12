import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme, type Theme } from "@/components/theme-provider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Tabs value={theme} onValueChange={(value: string) => setTheme(value as Theme)}>
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
