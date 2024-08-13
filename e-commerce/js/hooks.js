export const formatToRupees = (price) => {
  return `Rs.${price.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

// Function to scroll to new arrivals section
export const scrollToNewArrivals = () => {
  const newArrivalsSection = document.querySelector(".new-arrivals");
  if (newArrivalsSection) {
    newArrivalsSection.scrollIntoView({ behavior: "smooth" });
  }
};