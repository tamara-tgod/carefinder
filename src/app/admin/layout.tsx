export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="">
            <main>{children}</main>

        </div>
    )
}