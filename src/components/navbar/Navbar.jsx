import styles from "./Navbar.module.css"
import Link from "next/link"

const NAV = [
  { id:1, title:"Home", url:"/" },
  { id:2, title:"Products", url:"/products" },
  { id:3, title:"Profile", url:"/profile" },
];

const CART = [
  { id:4, title:"Cart", url:"/Cart" },
];

const Navbar = () => {
    return (
        <>  <div className={styles.nav_layout}>
                <div className={styles.div_header}>
                    <nav className={styles.navbar_wrapper}>
                        {NAV.map((item) => (
                            <div key={item.id}>
                                <Link href={item.url}>
                                    <p>
                                        {item.title}
                                    </p>
                                </Link>
                            </div>
                        ))}
                    </nav>
                    {CART.map((item) => (
                        <div key={item.id}>
                            <Link href={item.url}>
                                <p>
                                    {item.title}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;