import { IconArrowBigRightLine } from '@tabler/icons-react';

const getIconByName = (name: string) => {
    switch (name) {
        case 'IconArrowBigRightLine': {
            return IconArrowBigRightLine;
        }
        default: {
            throw Error('Icon not found');
        }
    }
};

export default getIconByName;
