import classes from './steps.module.css'

export default function Steps(props:any){

    const index:any = 1;
    return ( 
        <main className='bg-slate-50'>
                <div className={`py-[100px]`} >
                    { /* code to be copied from here */}
                    <section className=''>
                        <div className='max-w-[1200px] mx-auto px-[16px] c-xs:px-[24px] c-xl2:px-0'>
                            {/* mid section - Start from here if you want the same container styles */}
                            <div className='flex flex-col gap-[30px] lg:grid lg:grid-cols-12 lg:gap-[50px]'>
                                <div className='lg:col-span-3'>
                                    {/* stepper */}
                                    <div className={classes.relative}>
                                        <div className={classes.stepper__line}></div>
                                        <div className={`${classes.stepper}  ${props.currentstep >= 0 ? classes['stepper--completed'] : ''}`}>
                                            <div className={classes.stepper__shape}>
                                                <span className={classes.stepper__number}>1</span>
                                                <svg className={classes.stepper__icon} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 457.57">
                                                    <path className="fill-white" d="M0,220.57c100.43-1.33,121-5.2,191.79,81.5,54.29-90,114.62-167.9,179.92-235.86C436-.72,436.5-.89,512,.24,383.54,143,278.71,295.74,194.87,457.57,150,361.45,87.33,280.53,0,220.57Z" />
                                                </svg>
                                            </div>
                                            <div className={classes.stepper__label}>
                                                <div className='font-custom-bold text-slate-600'>First Step</div>
                                                <div className='text-slate-500 text-small'>Introduction</div>
                                            </div>
                                        </div>
                                        <div className={`${classes.stepper}  ${props.currentstep >= 1 ? classes['stepper--completed'] : ''}`}>
                                            <div className={classes.stepper__shape}>
                                                <span className={classes.stepper__number}>2</span>
                                                <svg className={classes.stepper__icon} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 457.57">
                                                    <path className="fill-white" d="M0,220.57c100.43-1.33,121-5.2,191.79,81.5,54.29-90,114.62-167.9,179.92-235.86C436-.72,436.5-.89,512,.24,383.54,143,278.71,295.74,194.87,457.57,150,361.45,87.33,280.53,0,220.57Z" />
                                                </svg>
                                            </div>
                                            <div className={classes.stepper__label}>
                                                <div className='font-custom-bold text-slate-600'>Second Step</div>
                                                <div className='text-slate-500 text-small'>Destination</div>
                                            </div>
                                        </div>
                                        <div className={classes.stepper}>
                                            <div className={classes.stepper__shape}>
                                                <span className={classes.stepper__number}>3</span>
                                                <svg className={classes.stepper__icon} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 457.57">
                                                    <path className="fill-white" d="M0,220.57c100.43-1.33,121-5.2,191.79,81.5,54.29-90,114.62-167.9,179.92-235.86C436-.72,436.5-.89,512,.24,383.54,143,278.71,295.74,194.87,457.57,150,361.45,87.33,280.53,0,220.57Z" />
                                                </svg>
                                            </div>
                                            <div className={classes.stepper__label}>
                                                <div className='font-custom-bold text-slate-600'>Third Step</div>
                                                <div className='text-slate-500 text-small'>Lorem ipsum dolar</div>
                                            </div>
                                        </div>
                                        <div className={classes.stepper}>
                                            <div className={classes.stepper__shape}>
                                                <span className={classes.stepper__number}>4</span>
                                                <svg className={classes.stepper__icon} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 457.57">
                                                    <path className="fill-white" d="M0,220.57c100.43-1.33,121-5.2,191.79,81.5,54.29-90,114.62-167.9,179.92-235.86C436-.72,436.5-.89,512,.24,383.54,143,278.71,295.74,194.87,457.57,150,361.45,87.33,280.53,0,220.57Z" />
                                                </svg>
                                            </div>
                                            <div className={classes.stepper__label}>
                                                <div className='font-custom-bold text-slate-600'>Finish</div>
                                                <div className='text-slate-500 text-small'></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* stepper */}
                                </div>
                                <div className='lg:col-span-9'>
                                    <div className='bg-white p-5 shadow rounded-[8px] min-h-[200px]'></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    { /* code to be copied from here ends */}

                </div>
            </main>
    )
}