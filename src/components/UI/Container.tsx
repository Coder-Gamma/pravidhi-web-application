import type {ReactNode } from "react";
import {cn} from "../../lib/utils";

interface ContainerProps {
    children: ReactNode;
    className?: string;
    as?: React.ElementType;
}

export const Container = ({
    children, 
    className,
    as: Tag = "div"
}: ContainerProps) => {
    return (
        <Tag className={cn("mx-auto max-w-(--width-container) px-4 sm:px-6 lg:px-8",className) }>
            {children}
        </Tag>
    );
};
