export type RoleType = 'sheriff' | 'deputy' | 'outlaw' | 'renegade';
export type TeamType = 'sheriff' | 'outlaw' | 'renegade';

export class Role {
  name: string
  teamType: TeamType;
  roleType: RoleType;


  constructor(name: string, teamType: TeamType, roleType: RoleType) {
    this.name = name;
    this.teamType = teamType;
    this.roleType = roleType;
  }

  kill(): number {
    if (this.teamType == 'renegade') {
      return 0;
    }
    return 1;
  }

  win(teamAlive: number): number {
    switch (this.teamType) {
      case 'sheriff':
      case 'outlaw':
      case 'renegade':
    }

    return 0;
  }
}
