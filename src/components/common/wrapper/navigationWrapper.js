import { useNavigate } from "react-router";


export function withNavigation(Component) {
    return props => <Component {...props} navigate={useNavigate()} />;
  }