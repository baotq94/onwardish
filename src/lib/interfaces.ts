// In types.ts or interfaces.ts
import React from 'react';

export interface CustomLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string;
    children?: React.ReactNode;
}
