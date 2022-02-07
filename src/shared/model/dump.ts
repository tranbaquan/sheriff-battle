import {Member} from './member';
import {Role} from './role';
import {Character} from './character';
import {Ranking} from './ranking';

export const DUONG_N = new Member('duongn', 'Duong Nguyen', '');
export const LUNA = new Member('lanlt2', 'Luna', '');
export const DAT_TM = new Member('dattm', 'Dat Tran', '');
export const MANH_BV = new Member('manhbv', 'Mạnh Bơ Vơ', '');
export const TRI_NC = new Member('trinc', 'Tri Nguyen', '');
export const QUAN_TB = new Member('quantb', 'Quan Tran', '');
export const HUYEN_2K = new Member('huyenntn', 'Hoèn 2k', '');
export const LUAN_PD2 = new Member('luanpd2', 'Luân Nhỏ', '');
export const LUAN_V = new Member('luanv', 'Luân To', '')

export const MEMBERS = [DUONG_N, LUNA, DAT_TM, MANH_BV, TRI_NC, QUAN_TB, HUYEN_2K, LUAN_PD2, LUAN_V];

export const SHERIFF = new Role('Sheriff', 'sheriff', 'sheriff');
export const DEPUTY = new Role('Deputy', 'sheriff', 'deputy');
export const OUTLAW = new Role('Outlaw', 'outlaw', 'outlaw');
export const RENEGADE = new Role('Renegade', 'renegade', 'renegade');

export const ROLES = [SHERIFF, DEPUTY, OUTLAW, RENEGADE];

export const CHARACTERS = [
  new Character('001', DUONG_N, SHERIFF, [], false),
  new Character('002', LUNA, OUTLAW, [], false),
  new Character('003', DAT_TM, DEPUTY, [], false),
  new Character('004', MANH_BV, OUTLAW, [], false),
  new Character('005', TRI_NC, RENEGADE, [], false),
  new Character('006', QUAN_TB, DEPUTY, [], false),
  new Character('007', HUYEN_2K, DEPUTY, [], false),
  new Character('008', LUAN_PD2, OUTLAW, [], false),
  new Character('008', LUAN_V, OUTLAW, [], false)
]

export const RANKING = [
  new Ranking(DUONG_N, 19, 1),
  new Ranking(LUNA, 13, 2),
  new Ranking(DAT_TM, 12, 3),
  new Ranking(MANH_BV, 10, 4),
  new Ranking(TRI_NC, 8, 5),
  new Ranking(QUAN_TB, 7, 6),
  new Ranking(HUYEN_2K, 5, 7),
  new Ranking(LUAN_PD2, 4, 8),
  new Ranking(LUAN_V, 1, 9)
];
