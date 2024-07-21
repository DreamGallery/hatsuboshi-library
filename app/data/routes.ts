import { TFunction } from "i18next";
import {
  routeAboutIcon,
  routeCharactersIcon,
  routeCidolIcon,
  routeCsprtIcon,
  routeToolsIcon
} from "~/assets/media";

export function getRoutes(t: TFunction<"translation", undefined>) {
  return [
    {
      route: "/character",
      label: t("route-character"),
      icon: routeCharactersIcon,
    },
    {
      route: "/tools",
      label: t("route-tools"),
      icon: routeToolsIcon,
      disabled: true,
    },
    {
      route: "/cidol",
      label: t("route-cidol"),
      icon: routeCidolIcon,
    },
    {
      route: "/csprt",
      label: t("route-csprt"),
      icon: routeCsprtIcon,
    },
    {
      route: "/about",
      label: t("route-about"),
      icon: routeAboutIcon,
    },
  ]
}
