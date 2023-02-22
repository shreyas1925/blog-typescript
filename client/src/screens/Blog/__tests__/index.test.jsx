import { render, screen, waitFor } from "@testing-library/react";
import Blog from "..";
import { mockBlogPostData } from "../../../mocks/blogPosts";
import makeRequest from "../../../utils/makeRequest";

jest.mock("../../../utils/makeRequest");

describe("BlogPosts", () => {
  it("should show loading text when data is still rendering", async () => {
    makeRequest.mockResolvedValue(mockBlogPostData);
    render(<Blog />);

    const loadingElement = screen.getByText("loading", { exact: false });
    expect(loadingElement).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByText("mock title 1")).toBeTruthy();
    });
  });

  it("should show blog data after rendering", async () => {
    makeRequest.mockResolvedValue(mockBlogPostData);
    render(<Blog />);
    await waitFor(() => {
      expect(screen.getAllByTestId("card")).toHaveLength(2);
    });
  });
  
});
