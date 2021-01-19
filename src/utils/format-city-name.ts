export const formatCityName = (name: String) => {
  return name.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}