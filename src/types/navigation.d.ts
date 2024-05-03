export interface RouteType {
  path: string;
  layout?: "dashboard" | "portal";
  component: JSX.Element;
  permissions?: string[];
}
