import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

interface LayoutProps {
    children?: React.ReactNode;
    headerAbsolute?: boolean
    newsletter?: boolean
}

export  function Layout({ children , headerAbsolute, newsletter}: LayoutProps) {
    return (
        <>
            <HeaderComponent headerAbsolute={headerAbsolute} />

            {children}

            <FooterComponent newsletter={newsletter}/>
        </>
    );
}




