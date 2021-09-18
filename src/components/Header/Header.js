import Links from "../../variables/Links";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";
import './Header.scss';

export default function Header() {
    return <nav>
        <div className="logo-wrapper">
        </div>
        <div className="top-menu">
            {Links.map(item => (
                <Typography className="top-menu__link" key={item.title}>
                    <Link href={item.path} >
                        {item.title}
                    </Link>
                </Typography>
            ))}
        </div>
    </nav>

}