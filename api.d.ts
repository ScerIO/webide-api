declare module ''api'/Bootstrap' {
	export {};

}
declare module ''api'/Database' {
	import * as mongoose from 'mongoose'; const _default: typeof mongoose;
	export default _default;

}
declare module ''api'/utils/randomString/index' {
	export default function randomString(chunks?: number): string;

}
declare module ''api'/utils/token/index' {
	export default function token(): string;

}
declare module ''api'/utils/randomInteger/index' {
	export default function randomInteger(min: number, max: number): number;

}
declare module ''api'/utils/numberCombination/index' {
	export default function numberCombination(maxLength?: number): string;

}
declare module ''api'/schema/query/index' {
	import IUser from 'api/user/interface';
	export default class RootQuery {
	    user(token: string): Promise<IUser | null>;
	    news(): number;
	}

}
declare module ''api'/error/interface' {
	export default interface IApiErrorOptions {
	    errorCode: number;
	}

}
declare module ''api'/schema/mutation/index' {
	import { UserModel } from 'api/user/model';
	export default class RootMutation {
	    auth(): number;
	    user(token: string): Promise<UserModel | null | string>;
	    news(): number;
	}

}
