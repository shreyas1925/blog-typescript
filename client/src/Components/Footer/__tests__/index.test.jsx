import Footer from ".."
import {render,screen} from '@testing-library/react'

describe('Footer',()=>{
    it('should render correctly without crashing',()=>{
        render(<Footer/>)
        const footerElement = screen.getByTestId('footer')
        expect(footerElement).toBeTruthy()
    })
    it('should render correctly without crashing forming a snapshot',()=>{
        const {asFragment} = render(<Footer/>)
        expect(asFragment()).toMatchSnapshot()   
    })
    it('should have text "artifact.com 2019"',()=>{
        render(<Footer/>)
        const footerElement = screen.queryByText('artifact.com 2019',{exact:false})
        expect(footerElement).toBeTruthy() 
    })
    
})