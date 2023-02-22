import NavBar from ".."
import {render,screen} from '@testing-library/react'
describe('Navbar',()=>{
    it('should render correctly without crashing',()=>{
        render(<NavBar/>)
        const navbarElement = screen.getByTestId('navbar')
        expect(navbarElement).toBeTruthy()
    })

    it('should render all list items correctly',()=>{
        render(<NavBar/>)
        const listItems = screen.getAllByRole('listitem')
        expect(listItems).toHaveLength(3)
    })
    it('should render logo heading h1 correctly',()=>{
        render(<NavBar/>)
        const headingItems = screen.getByRole('heading',{
            level:1
        })
        expect(headingItems).toBeInTheDocument()
    })
    it('should render logo heading h3 correctly',()=>{
        render(<NavBar/>)
        const headingItems = screen.getByRole('heading',{
            level:3
        })
        expect(headingItems).toBeInTheDocument()
    })
    
    it('should render correctly without crashing forming a snapshot',()=>{
        const {asFragment} = render(<NavBar/>)
        expect(asFragment()).toMatchSnapshot()   
    })  
    
})