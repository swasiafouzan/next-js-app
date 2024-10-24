export default function DashboadLayout({
    children, //will be a page or a nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/*Include share ui here eg a header or a side bar*/}
            <nav></nav>
        {children}
        </section>
    )
}