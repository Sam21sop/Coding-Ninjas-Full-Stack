import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "./App";

// mocking api request
const data = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355"
  }
];
const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/*", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App renders correctly", () => {
  test("App renders a loader and 3 images", async () => {
    render(<App />);
    const beforeLoadingEl = screen.getByText(/loading/i);
    expect(beforeLoadingEl).toBeInTheDocument();

    const imgEls = await screen.findAllByRole("img");
    expect(imgEls).toHaveLength(3);

    const afterLoadingEl = screen.queryByText(/loading/i);
    expect(afterLoadingEl).not.toBeInTheDocument();
  });

  test("App renders images correctly", async () => {
    render(<App />);

    const imgEls = await screen.findAllByRole("img");
    imgEls.forEach((img, i) => expect(img).toHaveAttribute("src", data[i].url));
  });
});
