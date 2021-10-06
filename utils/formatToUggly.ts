import { removeAccents } from "./removeAccents";

interface FormatToUglyProps {
  name: string;
  id: any;
}

export const formatToUggly = ({ name, id }: FormatToUglyProps) => {
  const divisor = "id";

  if (
    name !== "" &&
    name?.replaceAll(" ", "").length > 0 &&
    id !== "" &&
    id?.replaceAll(" ", "").length > 0
  ) {
    return `${removeAccents(name)
      .replaceAll(" ", "-")
      .toLowerCase()}${divisor}${id}`;
  } else {
    return `empty${divisor}emppy`;
  }
};
