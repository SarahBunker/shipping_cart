/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Form from "../Components/Form";

test("add product link is shown on the page", () => {
  render(<Form />);
  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
});

test("form becomes visible when link is clicked", async () => {
  //const func = jest.fn();
  render(<Form />);
  const user = userEvent.setup();
  const link = screen.getByRole("link");
  const div = screen.getByTestId("container");

  await user.click(link);
  expect(div.classList.contains("visible")).toBe(true);
});

test("name state changes on input", async () => {
  render(<Form />);
  const user = userEvent.setup();
  const link = screen.getByRole("link");

  await user.click(link);
  const inputProductName = screen.getByRole("textbox", {
    name: "Product Name",
  });
  await user.type(inputProductName, "chocolate");
  expect(inputProductName).toHaveValue("chocolate");
});

test("price state changes on input", async () => {
  render(<Form />);
  const user = userEvent.setup();
  const link = screen.getByRole("link");

  await user.click(link);
  const inputPrice = screen.getByRole("textbox", {
    name: "Price",
  });
  await user.type(inputPrice, "5");
  expect(inputPrice).toHaveValue("5");
});

test("quantity state changes on input", async () => {
  render(<Form />);
  const user = userEvent.setup();
  const link = screen.getByRole("link");

  await user.click(link);
  const inputProductQuantity = screen.getByRole("textbox", {
    name: "Quantity",
  });
  await user.type(inputProductQuantity, "300");
  expect(inputProductQuantity).toHaveValue("300");
});

test("onSubmit is called when button is clicked", async () => {
  const func = jest.fn();
  render(<Form onSubmit={func} />);
  const user = userEvent.setup();
  const link = screen.getByRole("link");
  await user.click(link);

  const inputProductName = screen.getByRole("textbox", {
    name: "Product Name",
  });
  await user.type(inputProductName, "chocolate");

  const inputPrice = screen.getByRole("textbox", {
    name: "Price",
  });
  await user.type(inputPrice, "5");

  const button = screen.getByTestId("add");
  await user.click(button);
  expect(func.mock.calls.length).toBe(1);
});

test("onSubmit is called with the new product", async () => {
  const func = jest.fn();
  render(<Form onSubmit={func} />);
  const user = userEvent.setup();
  const link = screen.getByRole("link");
  await user.click(link);

  const inputProductName = screen.getByRole("textbox", {
    name: "Product Name",
  });
  await user.type(inputProductName, "chocolate");

  const inputPrice = screen.getByRole("textbox", {
    name: "Price",
  });

  const inputProductQuantity = screen.getByRole("textbox", {
    name: "Quantity",
  });
  await user.type(inputProductQuantity, "12");

  await user.type(inputPrice, "5");
  const newProduct = {
    title: inputProductName.value,
    price: parseInt(inputPrice.value, 10),
    quantity: parseInt(inputProductQuantity.value, 10),
  };

  const button = screen.getByTestId("add");
  await user.click(button);
  expect(func.mock.calls[0][0]).toEqual(newProduct);
});
