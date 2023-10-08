import { get } from "https://jscroot.github.io/api/croot.js";
import { isiDataIndex } from "./getKonten.js";

get("https://bursakerja.github.io/js/data.json", isiDataIndex);
