import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/67c8523a196569babc59d9a898d8fd85~c5_100x100.jpeg?x-expires=1694624400&x-signature=eF1HVuACCKboOeXcEx09keATsx4%3D"
                alt="Hung"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span> Nguyen Thanh Hung</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenhung</span>
            </div>
        </div>
    );
}

export default AccountItem;
