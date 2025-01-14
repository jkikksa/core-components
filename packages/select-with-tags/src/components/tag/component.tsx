import React, { useCallback } from 'react';
import cn from 'classnames';

import { Tag as CoreTag } from '@alfalab/core-components-tag';
import { CrossCompactMIcon } from '@alfalab/icons-glyph/CrossCompactMIcon';

import { TagComponent } from '../../types';

import styles from './index.module.css';

export const Tag: TagComponent = ({
    option: { content, key },
    onClick,
    handleDeleteTag,
    ...props
}) => {
    const handleClick = useCallback(() => {
        if (handleDeleteTag) {
            handleDeleteTag(key);
        }
    }, [handleDeleteTag, key]);

    return (
        <CoreTag
            key={key}
            size='xxs'
            onClick={onClick}
            checked={!!handleDeleteTag}
            className={cn(styles.tag, { [styles.tagNoClose]: !handleDeleteTag })}
            {...props}
        >
            <span className={styles.tagContentWrap}>
                {content}
                {handleDeleteTag && (
                    // eslint-disable-next-line
                    <span className={styles.tagCross} onClick={handleClick}>
                        <CrossCompactMIcon />
                    </span>
                )}
            </span>
        </CoreTag>
    );
};
