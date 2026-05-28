import { createBrowserRouter } from "react-router";
import { Layout } from "./layout";
import { Home } from "./pages/home";
import { Services } from "./pages/services";
import { Work } from "./pages/work";
import { Pricing as PricingPage } from "./pages/pricing-page";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { NotFound } from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "work", Component: Work },
      { path: "pricing", Component: PricingPage },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
