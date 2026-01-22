import type { Routes } from "@angular/router";
import { Home } from "@app/home/home";

const Brand = "Isaac Bejarano";
export const routes: Routes = [
  {
    title: `${Brand} | Portfolio`,
    path: "",
    pathMatch: "full",
    component: Home,
  }, // eager
  {
    title: `${Brand} | Page Not Found`,
    path: "**",
    loadComponent: () => import("@app/p404/p404").then((m) => m.Page404), // lazy
  },
];
