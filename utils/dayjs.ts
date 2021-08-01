import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");
dayjs.extend(duration);

export default dayjs;
