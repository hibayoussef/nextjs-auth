import Nav from "../components/Nav";


const pagesLayout = ({ children }: {
    children: React.ReactNode
}) => {
    console.log('childrens: ', children)
    return (
        <div>
            <Nav />
            <div>
                {children}
            </div>
        </div>
    )
}

export default pagesLayout;