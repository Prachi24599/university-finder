import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // for `toHaveValue` matcher
import CountryDropdown from "./CountryDropdown";
import { UniversityProvider } from "../context/UniversityContext";

// Mock the context values for testing
const contextValues = {
  selectedCountry: "Sweden", // Initial selected country
  setSelectedCountry: jest.fn(), // Mocked setSelectedCountry function
};

// Wrap the CountryDropdown component with the UniversityProvider context
const renderWithProvider = (component) => {
  return render(
    <UniversityProvider value={contextValues}>{component}</UniversityProvider>
  );
};

test("renders the country dropdown correctly", () => {
  const countries = ["Sweden", "Norway", "India", "United States"];

  renderWithProvider(<CountryDropdown countries={countries} />);

  // Ensure the label and select element are rendered
  expect(screen.getByText(/Select a Country/i)).toBeInTheDocument();
  expect(screen.getByRole("combobox")).toBeInTheDocument();

  // Check if options are rendered for each country
  countries.forEach((country) => {
    expect(screen.getByText(country)).toBeInTheDocument();
  });
});

test("handles country selection", () => {
  const countries = ["Sweden", "Norway", "India", "United States"];

  renderWithProvider(<CountryDropdown countries={countries} />);

  const selectElement = screen.getByRole("combobox");

  // Simulate selecting a country from the dropdown
  fireEvent.change(selectElement, { target: { value: "India" } });

  // Check if setSelectedCountry was called with the selected value
  expect(contextValues.setSelectedCountry).toHaveBeenCalledWith("India");
  expect(selectElement).toHaveValue("India");
});
