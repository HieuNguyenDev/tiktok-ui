import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_300x300.webp?x-expires=1664546400&x-signature=S7fSSDZr0OE3zryYN%2FfP0w5ATbc%3D"
                alt="username"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>mixigaming</span>
                    <FontAwesomeIcon
                        className={cx('icon-check')}
                        icon={faCheckCircle}
                    />
                </p>
                <span className={cx('username')}>Độ Phùng</span>
            </div>
        </div>
    );
}

export default AccountItem;
