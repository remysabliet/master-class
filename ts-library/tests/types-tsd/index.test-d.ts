import { expectNotAssignable, expectAssignable } from "tsd";

import { ITeam } from "../../src/type";

expectNotAssignable<ITeam>(1);
expectNotAssignable<ITeam>({ channels: [], iconUrl: "", id: "", name: "" });
