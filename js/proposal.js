import { get } from "https://jscroot.github.io/api/croot.js";
import { isiDataProposal } from "./getKonten.js";

get("https://bursakerja.github.io/js/data.json", isiDataProposal);
