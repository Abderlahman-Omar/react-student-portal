// LayoutContext.tsx
import React, { createContext, useState, ReactNode } from "react";

type LayoutDirection = "ltr" | "rtl";

interface LayoutContextType {
    direction: LayoutDirection;
    setDirection: (direction: LayoutDirection) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [direction, setDirection] = useState<LayoutDirection>("ltr");

    return (
        <LayoutContext.Provider value={{ direction, setDirection }}>
            <div style={{ direction }}>{children}</div>
        </LayoutContext.Provider>
    );
};

export const useLayout = () => {
    const context = React.useContext(LayoutContext);
    if (context === undefined) {
        throw new Error("useLayout must be used within a LayoutProvider");
    }
    return context;
};
