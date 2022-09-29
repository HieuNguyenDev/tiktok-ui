import classNames from 'classnames/bind';
import styles from './Button.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    onClick,
    children,
    ...passProps
}) {
    let Component = 'button';
    let props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    let classes = cx('wrapper', {
        primary,
        outline,
    });

    return (
        <Component className={classes} {...props}>
            <span>{children}</span>
        </Component>
    );
}

export default Button;
