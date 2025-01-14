import React, { FC } from 'react';
import cn from 'classnames';

import { flagSprite } from './flagSprite';
import styles from './index.module.css';

export type FlagIconProps = {
    /**
     * Код страны из <a href="https://ru.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank">ISO 3166-1 alpha-2</a>
     */
    country?: string;

    /**
     * Дополнительный класс
     */
    className?: string;
};

/**
 * Компонент флага в виде иконки.
 */
export const FlagIcon: FC<FlagIconProps> = ({ country = '', className }) =>
    flagSprite[country] ? (
        <span
            className={cn(styles.flagIcon, className)}
            data-test-id={`flag-icon-${country}`}
            dangerouslySetInnerHTML={{ __html: flagSprite[country] }}
        />
    ) : (
        <div className={cn(styles.flagPlaceholder, className)} />
    );
