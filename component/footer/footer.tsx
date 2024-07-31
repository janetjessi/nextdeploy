import classes from './footer.module.css';
import Image from 'next/image';

export default function Footer(props:any){

    return (
        <>
        <footer className={classes.footer}>
    <div className={classes['footer-container']}>
        <div className={classes['subscribe-content']}>
            <div className={classes['subscribe-newsletter']}>
                <h3 className={classes['subscribe-header']}>Subscribe to our newsletter</h3>
                <p className={classes['subscribe-para']}>Get top tips &amp; guidance from our in-house study abroad experts</p>
                <input type="text" className={classes['submail-textbox']} placeholder="Enter your email" name="email" />
                <div className={classes['subscribe-inputbox']}>
                    <input type="checkbox" className={classes['form-check-input']} id="check4" name="option1" value="something" />
                    <label className={`${classes['form-check-label']} ${classes['idp-policy']}`} htmlFor="check4">
                        I confirm that I am over 16. I also agree to IDP's <a href="#" className={classes['checkbox-word']}>Terms and Conditions</a> &amp; <a href="#" className={classes['checkbox-word']}>Privacy Policy</a>. I also agree to join the Hotcourses community. </label>
                </div>
                <button type="button" className={classes['btn-subscribe']}>SUBSCRIBE NOW</button> 
            </div>
            <div className={classes['ftr-links']}>
                <h3 className={classes['ftr-useful']}>Useful links</h3>
                <ul>
                    <li>Privacy Notice</li>
                    <li>Cookies</li>
                    <li>Terms and Conditions</li>
                    <li>Site Map</li>
                    <li>Hotcourses India</li>
                    <li>IDP Connect</li>
                </ul>
                <div className={classes['ftr-flwups']}>
                    <h3 className={classes['ftr-flw']}>Follow us</h3>
                    <div className={classes['flwups-image']}>
                        {/* <span><Image src='https://images-intl.aws.dev.idp-connect.com/hca-cont/img/footer/facebook.svg' alt='FaceBook'
                          width={500} height={500}></Image></span> */}
                        <span><Image src="https://images-intl.aws.dev.idp-connect.com/hca-cont/img/footer/facebook.svg" alt='fbicon' width={50} height={50} className='w-full h-full'/></span>
                        <span><Image src="https://images-intl.aws.dev.idp-connect.com/hca-cont/img/footer/twitter.svg" alt='twittericon' width={50} height={50} className='w-full h-full'/></span>
                        <span><Image src="https://images-intl.aws.dev.idp-connect.com/hca-cont/img/footer/instagram.svg" alt='instaicon' width={50} height={50} className='w-full h-full'/></span>
                        <span><Image src="https://images-intl.aws.dev.idp-connect.com/hca-cont/img/footer/you_tube.svg" alt='utubeicon' width={50} height={50} className='w-full h-full'/></span>
                    </div>
                </div>
            </div>
        </div> 
    </div>  
    <div className={classes['footer-div-border']}></div> 
    <div className={classes['footer-info-container']}>
        <div className={classes['ftr-info']}>
            <ul>
                <li className={classes['lang']}>
                    <Image src="/Assets/globe-alt.png" width={50} height={50} className='w-full h-full' />
                    <select className={`${classes['form-select']}  ${classes['lang-selectbox']}`} id="langid" name="lang">
                        <option>India</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                </li>
                <li className={classes['ftridp-txt']}>© 2021 IDP Connect Limited All rights reserved.</li>
                <li className={classes['ftridp-logo']}>
                    <Image className={classes['hot-logo']}  src={'/idpconnect_whitelogo.svg'} alt='hero'
                         width={500} height={500}></Image>
                    
                    </li>
            </ul>
        </div>  
    </div>   
    
</footer>
        </>
    )
}