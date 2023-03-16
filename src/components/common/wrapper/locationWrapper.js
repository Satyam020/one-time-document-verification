import { useLocation } from "react-router";


export function withLocation(Component) {
    return props => <Component {...props} location={useLocation()} />;
  }