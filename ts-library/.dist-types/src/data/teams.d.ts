import { ITeam } from "../type";
export declare function getAllTeams(): Promise<ITeam[]>;
export declare function getTeamById(id: string): Promise<ITeam>;
