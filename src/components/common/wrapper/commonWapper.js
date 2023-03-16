import { useNavigate } from "react-router";
import { useLocation } from "react-router";



export function withService(Component) {
    return props => <Component {...props} navigate={useNavigate()} location={useLocation()} />;
}
