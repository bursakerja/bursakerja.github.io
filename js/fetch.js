import { get } from "https://jscroot.github.io/api/croot.js";
import { isiDataProposal } from "./getKonten.js";

get("http://127.0.0.1:5500/js/kontenProposal.json", isiDataProposal);
