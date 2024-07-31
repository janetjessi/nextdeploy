import classes from './header.module.css';
import Image from 'next/image';

export default function Header(props:any){

    return (
        <>
        <div className={classes['header-container']}>
    {/* <!-- header starts here --> */}
        <div className="sidenav">
            <div className={classes['sidenav-icon']}>
            {/* https://images-intl.aws.test.idp-connect.com/hca-cont/img/sitelogo/new/hc_idp/en.png */}
                {/* <img className="hamburger-icon" aria-hidden="true" src="Assets/hamburger.png" /> */}
            </div>
        </div>
        
        {/* <!-- <img class="Hotlogo" src="Assets/com_logo.png"> --> */}

        <div className={classes['logo-container']}>
       
            <img className={classes['hot-logo']} src={'/hclogo.png'} alt='logo' width={100} height={100}/> 
            <img className={classes['hot-logo-mob']} src='https://images-intl.aws.dev.idp-connect.com/hca-cont/img/sitelogo/new/hc_idp/com_logo.png' alt='logo' /> 
        </div>
        {/* <!-- Nav items --> */}
        <nav className={classes.navbar}>
                <ul className={classes['nav-servicelist']}>
                    <li className={classes['nav-links']}>
                        <span className={classes.lnk}>Get advice</span>
                            <span>
                                <i className={`${classes.fa} ${classes['fa-angle-down']}`}></i>
                            </span> 
                    </li>
                    <li className={classes['nav-links']}>
                        <span className={classes.lnk}>Find a course</span>
                            <span>
                                <i className={`${classes.fa} ${classes['fa-angle-down']}`}></i>
                            </span> 
                    </li>
                    <li className={classes['nav-links']}>
                        <span className={classes.lnk}>Study destination</span>
                            <span>
                                <i className={`${classes.fa} ${classes['fa-angle-down']}`}></i>
                            </span> 
                    </li>
                    <li className={classes['nav-links']}>
                        <span className={classes.lnk}>Our services</span>
                            <span>
                                <i className={`${classes.fa} ${classes['fa-angle-down']}`}></i>
                            </span> 
                    </li>
                    <li className={classes['nav-links']}>
                        <span className={classes.lnk}>Latest news</span>
                    </li>
                </ul>
        </nav>
        {/* <!-- nav icons --> */}
        <ul className={classes['nav-icons']}>
            <li className={classes.icons}>
                <i className={`${classes.fa} ${classes['fa-search']} ${classes['fa-2x']} ${classes.icon_srch} `} aria-hidden="true"></i>
            </li>
            <li className={classes.icons}>
                <i className={`${classes.fa} ${classes['fa-heart']} ${classes.icon_hrd} `} aria-hidden="true"></i>
            </li>
            <li className={classes.icons}>
           
            <Image className={classes['user-icon']}  src={'/headProfile_icon.svg'} alt='hero'
    width={500}
    height={500} unoptimized={true}></Image>
                {/* <img  className="user-icon" aria-hidden="true" src="Assets/hci_default_user.png" /> */}
            </li>
        </ul>
</div> 
        
        </>
    )
}