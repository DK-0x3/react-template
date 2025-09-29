declare module '*.svg?url' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    import * as React from 'react';

    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}
