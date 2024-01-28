import Nav from "@/app/components/Nav";

const DashboardLayout = ({ children }: {
    children: React.ReactNode
}) => {
    console.log('childrens: ', children)
    return (
        <div>
            {/* <Nav />
            <div> */}
            {children}
            {/* </div> */}
        </div>
    )
}

export default DashboardLayout;