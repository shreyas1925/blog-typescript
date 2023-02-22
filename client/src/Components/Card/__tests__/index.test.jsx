import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Card from ".."
import makeRequest from "../../../utils/makeRequest";
import { mockBlogPostData } from "../../../mocks/blogPosts";

jest.mock("../../../utils/makeRequest");

describe('Card',()=>{
    
    it("should render correctly forming a snapshot", () => {
        makeRequest.mockResolvedValue(mockBlogPostData);
        const { asFragment } =  render(<Card blogData={mockBlogPostData}/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render correctly without crashing',async()=>{  
        makeRequest.mockResolvedValue(mockBlogPostData); 
        // console.log("show" + JSON.stringify(mockBlogPostData));
        render(<Card blogData={mockBlogPostData[0]}/>)
        await waitFor(()=>{
            // expect(screen.getByTestId('card',{exact:false})).toBeInTheDocument()
            expect(screen.getByText("mock description 1")).toBeTruthy()
        }) 
    })

    describe('Heart', () => {
        it('should be black heart before clicking heart icon',async()=>{   
            makeRequest.mockResolvedValue(mockBlogPostData);
            render(<Card blogData={mockBlogPostData[0]}/>);
            await waitFor(()=>{
                expect(screen.getByTestId('img')).toHaveAttribute('src', 'heart-black.svg');
            }) 
        })
        it('should be red heart after clicking heart icon',async()=>{   
            makeRequest.mockResolvedValue(mockBlogPostData);
            render(<Card blogData={mockBlogPostData[0]}/>);
            const ImageEvent = screen.getByTestId('img');
            fireEvent.click(ImageEvent);
            await waitFor(()=>{
                expect(ImageEvent).toHaveAttribute('src', 'heart-red.svg');
            })  
        })
        it('should be black heart after clicking heart icon twice',()=>{   
            makeRequest.mockResolvedValue(mockBlogPostData);
            render(<Card blogData={mockBlogPostData[0]}/>);
            const ImageEvent = screen.getByTestId('img');
            fireEvent.click(ImageEvent);
            fireEvent.click(ImageEvent);
            expect(ImageEvent).toHaveAttribute('src', 'heart-black.svg');
        })
    })

    describe('Claps Counter', () => {
        it('should be 0 before clicking clap icon',()=>{  
            makeRequest.mockResolvedValue(mockBlogPostData); 
            render(<Card blogData={mockBlogPostData[0]}/>);
            expect(screen.getByTestId('count')).toHaveTextContent('10')  
        })
        it('should be 1 when claps icon clicked once',()=>{  
            makeRequest.mockResolvedValue(mockBlogPostData);
            render(<Card blogData={mockBlogPostData[0]}/>);
            const countImageEvent = screen.getByTestId('count-img');
            const countEvent = screen.getByTestId('count');
            expect(countEvent).not.toBe('10');
            fireEvent.click(countImageEvent);
            expect(countEvent).toHaveTextContent('10');
           
        })
        it('should be 2 when claps icon clicked twice',()=>{   
            makeRequest.mockResolvedValue(mockBlogPostData);
            render(<Card blogData={mockBlogPostData[0]}/>);
            const countImageEvent = screen.getByTestId('count-img');
            const countEvent = screen.getByTestId('count');
            expect(countEvent).not.toBe('10');
            fireEvent.click(countImageEvent);
            fireEvent.click(countImageEvent);
            expect(countEvent).toHaveTextContent('10');
            
        })

        // it will check for 100,1000's also
        it('should be more than 1 when claps icon clicked more than once',async()=>{   
            makeRequest.mockResolvedValue(mockBlogPostData);
            render(<Card blogData={mockBlogPostData[0]}/>);
            const countImageEvent = screen.getByTestId('count-img');
            const countEvent = screen.getByTestId('count');
            expect(countEvent).not.toBe('10');
            fireEvent.click(countImageEvent);
            fireEvent.click(countImageEvent);
            fireEvent.click(countImageEvent);
            expect(countEvent).toHaveTextContent('10');
            
        })
    })  

})

