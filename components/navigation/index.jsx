import Image from "next/image"

import SearcherComponent from "./searcher"
import UserComponent from './user'
import CollectionMenu from "./menu"

export default function NavigationComponent() {

    return (
        <nav className="navbar">
            <div className="container navbar_layout">
                <div class="navbar_logo">
                    <Image src="/logo.svg" width={220} height={47} alt="logo" />
                </div>
                <div class="navbar_searcher">
                    <SearcherComponent />
                </div>
                <div>
                    <UserComponent />
                </div>
                <div className="navbar__menu">
                    <CollectionMenu />
                </div>
            </div>
        </nav>
    )
}
