import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

export function useNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navigateTo = useCallback(
    (section: string) => {
      if (isHomePage) {
        window.location.hash = section;
      } else {
        router.push(`/#${section}`);
      }
    },
    [isHomePage, router]
  );

  return { navigateTo, isHomePage };
}
