import { format } from "path";

const formatNumber = (number: Number) => {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export default formatNumber;