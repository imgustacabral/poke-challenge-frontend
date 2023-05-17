import { render } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Heading", () => {
  it("should render correctly with content", () => {
    const content = "Descubra as habilidades de seu Pokémon favorito!";

    const { getByText } = render(<Heading content={content} />);

    expect(getByText(content)).toBeInTheDocument();
  });
});
