import AsideAdmin from "../../components/Admin/Aside"

export default function RootLayout({ children }) {
    return (
        <main class="admin-wrapper bg-admin">
            <AsideAdmin />
            {children}
        </main>
    )
}