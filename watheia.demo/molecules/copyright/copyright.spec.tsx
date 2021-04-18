import React from "react"
import { render } from "@testing-library/react"
import { BasicCopyright } from "./copyright.composition"

describe("copyright", () => {
  it("should render with the correct text", () => {
    const { getByText } = render(<BasicCopyright />)
    const rendered = getByText("Watheia Labs, LLC.")
    expect(rendered).toBeTruthy()
  })
})
