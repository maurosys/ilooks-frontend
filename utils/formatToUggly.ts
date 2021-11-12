import { removeAccents } from "./removeAccents";

interface FormatToUglyProps {
  name: string;
  id: any;
}

export const formatToUggly = ({ name, id }: FormatToUglyProps) => {
  const divisor = "id";
  if (name && id) {
    if (
      name !== "" &&
      name?.replace(/\s/g, "").length > 0 &&
      id !== "" &&
      id?.replace(/\s/g, "").length > 0
    ) {
      return `${removeAccents(name)
        .replace(/\s/g, "-")
        .toLowerCase()}${divisor}${id}`;
    } else {
      return `empty${divisor}empty`;
    }
  } else {
    return `empty${divisor}empty`;
  }
};
