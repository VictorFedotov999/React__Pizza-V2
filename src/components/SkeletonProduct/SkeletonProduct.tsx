import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonProduct = () => {
    return (
        <>
            <SkeletonTheme>
                <div className='pizza-block'>
                    <Skeleton className='pizza-skeleton' />
                    <h4 className='pizza-block__title'>
                        <Skeleton />
                    </h4>
                    <div className='pizza-block__selector'>
                        <ul>
                            <li>
                                <Skeleton />
                            </li>
                            <li>
                                <Skeleton />
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Skeleton />
                            </li>
                            <li>
                                <Skeleton />
                            </li>
                        </ul>
                    </div>
                    <div className='pizza-block__bottom'>
                        <div className='pizza-block__price'>
                            <Skeleton width={100} height={25} />
                        </div>
                        <Skeleton width={135} height={39} borderRadius={20} />
                    </div>
                </div>
            </SkeletonTheme>
        </>
    );
};

export default SkeletonProduct;
