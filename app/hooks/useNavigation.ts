import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

export function useNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navigateTo = useCallback(
    (section: string) => {
      if (isHomePage) {
        // If on home page, use anchor link
        window.location.hash = section;
      } else {
        // If on project page, navigate to home with anchor
        router.push(`/#${section}`);
      }
    },
    [isHomePage, router]
  );

  return { navigateTo, isHomePage };
}
